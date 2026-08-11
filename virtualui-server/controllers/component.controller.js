import Component from "../models/component.model.js"
import User from "../models/user.model.js"
import path from "path"
import fs from "fs"
import { execSync } from "child_process"


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
            return res.status(403).json({
                message: "Only Admin Can Publish"
            })
        }

        const { componentId } = req.body

        const component = await Component.findById(componentId)
        if (!component) {
            return res.status(404).json({
                message: "Component not found"
            })
        }
        if (component.owner.toString() !== req.userId.toString()) {
            return res.status(403).json({
                message: "You Can only publish your own components"
            })
        }

        const libPath = path.join(process.cwd(), "../virtualui-lib")

        const componentDir = path.join(
            libPath,
            "src/components",
            component.name
        )
        const componentFile = path.join(
            componentDir,
            `${component.name}.jsx`
        )
        const indexFile = path.join(libPath, "src/index.js")

        if (!fs.existsSync(componentDir)) {
            fs.mkdirSync(componentDir, { recursive: true })
        }

        fs.writeFileSync(componentFile, component.code)

        if (!fs.existsSync(indexFile)) {
            fs.writeFileSync(indexFile, "")
        }
        let indexContent = fs.readFileSync(indexFile, "utf8")

        const exportLine = `export{${component.name}} from "./components/${component.name}/${component.name}.jsx";`

        if (!indexContent.includes(exportLine)) {
            fs.appendFileSync(indexFile, `\n${exportLine}\n`)
        }

        console.log("Cleaning old build...")
        const distPath = path.join(libPath, "dist")
        if (fs.existsSync(distPath)) {
            fs.rmSync(distPath, { recursive: true, force: true })
        }

        console.log("Building library...")
        execSync("npm run build", {
            cwd: libPath,
            stdio: "inherit"
        })

        console.log("Updating version...")
        execSync("npm version patch --no-git-tag-version", {
            cwd: libPath,
            stdio: "inherit"
        })

        console.log("Publishing to npm...")
        execSync("npm publish --access public", {
            cwd: libPath,
            stdio: "inherit"
        })

        component.visibility = "public"
        component.npmPackage = "kishore-virtual-ui-library"
        await component.save()

        return res.status(200).json({ message: "Component published successfully" })

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

// NEW: fetch only the logged-in user's private components
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