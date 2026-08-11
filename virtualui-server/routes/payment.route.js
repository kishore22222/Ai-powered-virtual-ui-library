import express from "express"
import { CreateOrder, verifyPayment } from "../controllers/payment.controller.js"
import isAuth from "../middlewares/isAuth.js"


const paymentRouter = express.Router()

paymentRouter.post("/create",isAuth,CreateOrder)
paymentRouter.post("/verify",isAuth,verifyPayment)

export default paymentRouter