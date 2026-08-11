import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected");
        
        
    } catch (error) {
        console.log("DB Error",error);
        
        
    }
    
}