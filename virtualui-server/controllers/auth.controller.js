import { genToken } from "../configs/token.js"
import User from "../models/user.model.js"

const isProduction = process.env.NODE_ENV === "production"

export const googleAuth = async (req, res) => {
    try {
        const { name, email } = req.body
        let user = await User.findOne({ email })
        if (!user) {
            user = await User.create({ name, email })
        }
        let token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({ message: `google Auth error ${error}` })
    }
}

export const logOut = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? "none" : "strict",
        })
        return res.status(200).json({ message: "Logout Successfully" })

    } catch (error) {
        return res.status(500).json({ message: `Failed to Logout ${error}` })
    }
}
