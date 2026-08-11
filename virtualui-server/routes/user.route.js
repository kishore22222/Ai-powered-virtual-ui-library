import express from "express"
import { getAllUsers, getCurrentUser } from "../controllers/user.controller.js"
import isAuth from "../middlewares/isAuth.js"

const userRouter = express.Router()
userRouter.get("/current-user",isAuth,getCurrentUser) 
userRouter.get("/all-users",getAllUsers)
export default userRouter