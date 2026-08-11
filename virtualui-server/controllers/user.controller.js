import User from "../models/user.model.js"

export const getCurrentUser = async (req,res) => {
    try {
        const user = await User.findById(req.userId)
        if(!user){
            return res.status(404).json({message:"Failed to get Current User"})
        }
        return res.status(200).json(user)
        
    } catch (error) {
        return res.status(500).json({message:`Current user server error ${error}`})
        
    }
    
}

export const getAllUsers = async (req,res) => {
    try {
        const users = await User.find().sort({createdAt:-1})
        if(!users){
            return res.status(404).json({message:"Users not found"})
        }
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({message:`Failedd to get all users ${error}`})
        
    }
    
}