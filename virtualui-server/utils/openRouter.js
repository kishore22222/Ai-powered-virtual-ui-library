import axios from "axios";
import { model } from "mongoose";

export const askAI = async (messages) => {
    try {
        if(!messages||!Array.isArray(messages)||messages.length===0){
            throw new Error("Messages array is empty");
        }

        const response = await axios.post("https://openrouter.ai/api/v1/chat/completions",{
            model:"openai/gpt-4o-mini",  //free opengpt
            messages:messages,
            temperature:0.7,
            max_tokens:2000,
            response_format:{type:"json_object"}  //enforce json output
        },{
            headers:{
                Authorization:`Bearer ${process.env.OPENROUTER_API_KEY}`,
                
              'X-OpenRouter-Title': 'VirtualUI', 
              'Content-Type': 'application/json',
  },
        })

        const content = response?.data?.choices?.[0]?.message?.content

        if(!content||!content.trim()){
            throw new Error("AI returned empty response");
        }
        return content
        
    } catch (error) {
        console.log("OpenRouter Error:",error.response?.data||error.message);
        throw new Error("OpenRouter API Error")
        
        
    }
    
}