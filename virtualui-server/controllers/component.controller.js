import Component from "../models/component.model.js"
import User from "../models/user.model.js"
import axios from "axios"


export const saveComponent = async (req, res) => {
    try {
        const { name, code, props } = req.body
        const user = await User.findById(req.userId)

        if (!user) {
            return res.status(404).json({ message: "user is not found" })
        }
        if (user.role === "admin") {
            const existing = await Component.findOne({ name, visibility: "public" })
            if (existing) {
                return res.status(400).json({
                    message: "Admin cannot create duplicate public component name"
                })
            }
        }
        if (user.role !== "admin") {
            const existing = await Component.findOne({
                name,
                owner: req.userId
            })
            if (existing) {
                return res.status(400).json({
                    message: "You already have a component with this name"
                })
            }
        }

        const component = await Component.create({
            name,
            code,
            props,
            owner: req.userId
        })
        return res.status(200).json(component)

    } catch (error) {
        return res.status(500).json({ message: `failed to save component ${error}` })
    }
}

export const publishComponent = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        if (!user || user.role !== "admin") {
            return res.status(403).json({ message: "Only Admin Can Publish" })
        }

        const { componentId } = req.body

        const component = await Component.findById(componentId)
        if (!component) {
            return res.status(404).json({ message: "Component not found" })
        }

        if (component.owner.toString() !== req.userId.toString()) {
            return res.status(403).json({ message: "You can only publish your own components" })
        }

        component.visibility = "public"
        component.npm = "virtualui-components-lib"
        await component.save()

        // Trigger the GitHub Actions workflow (publish.yml) to rebuild + republish
        // the npm package. The component must be "public" BEFORE dispatching,
        // because the workflow's sync.js only fetches public components.
        if (!process.env.GITHUB_PAT) {
            const msg = "Component is now public, but npm publish was NOT triggered because GITHUB_PAT is missing on the server."
            console.error(msg)
            return res.status(500).json({
                message: msg,
                hint: "Add GITHUB_PAT (GitHub classic PAT with 'repo' + 'workflow' scopes) to the Render env vars, then publish the component again.",
            })
        }

        try {
            await axios.post(
                "https://api.github.com/repos/kishore22222/Ai-powered-virtual-ui-library/actions/workflows/publish.yml/dispatches",
                { ref: "main" },
                {
                    headers: {
                        Authorization: `Bearer ${process.env.GITHUB_PAT}`,
                        Accept: "application/vnd.github+json",
                        "X-GitHub-Api-Version": "2022-11-28",
                    },
                }
            )
        } catch (triggerError) {
            const gh = triggerError?.response?.data
            console.error("GitHub Actions dispatch failed:", JSON.stringify(gh || triggerError.message))
            return res.status(500).json({
                message: "Component is now public, but failed to trigger the GitHub Actions build.",
                error: gh?.message || triggerError.message,
            })
        }

        return res.status(200).json({ message: "Component published successfully. GitHub Actions build triggered — monitor the Actions tab for the npm publish to complete." })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Component publish error" })
    }
}

export const getAllComponents = async (req, res) => {
    try {
        const components = await Component.find({ visibility: "public" })
            .populate("owner", "name email")
            .sort({ createdAt: -1 })

        if (!components || components.length === 0) {
            return res.status(404).json({ message: "No public components found" })
        }

        return res.status(200).json(components)

    } catch (error) {
        return res.status(500).json({ message: `failed to get all components ${error}` })
    }
}

export const getMyComponents = async (req, res) => {
    try {
        const components = await Component.find({
            owner: req.userId,
            visibility: "private"
        }).sort({ createdAt: -1 })

        return res.status(200).json(components)

    } catch (error) {
        return res.status(500).json({ message: `failed to get my components ${error}` })
    }
}