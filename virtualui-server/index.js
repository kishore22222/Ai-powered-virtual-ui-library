import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./configs/connectDB.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"
import userRouter from "./routes/user.route.js"
import componentRouter from "./routes/component.route.js"
import mongoose from "mongoose"
import paymentRouter from "./routes/payment.route.js"

dotenv.config()

const app = express()


 app.use(cors({
  origin: [
    "http://localhost:5173", 
    "http://localhost:5174",
    "https://ai-powered-virtual-ui-library-front.onrender.com",  // ✅ exact frontend URL
  ],
  credentials: true
}));

app.use(express.json())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.json("Hello from Server")
})

// TEMPORARY FIX ROUTE - REMOVE AFTER RUNNING ONCE
app.get("/fix-db", async (req, res) => {
  try {
    const db = mongoose.connection.db;
    
    const r1 = await db.collection("components").updateMany(
      { visiblity: { $exists: true } },
      { $rename: { "visiblity": "visibility" } }
    );
    
    const r2 = await db.collection("components").updateMany(
      { visibilty: { $exists: true } },
      { $rename: { "visibilty": "visibility" } }
    );
    
    res.json({ r1, r2 });
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/component",componentRouter)
app.use("/api/payment",paymentRouter)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server Started on Port ${PORT}`);
    connectDB()
})