const express=require('express');


const userRouter=express();


userRouter.post('/',(req,res)=>{
    const {email,password} = req.body;
    
    if (!email ){
        res.status(400).json({message:"Email cannot be empty."})
    }
    if (!password){
        res.status(400).json({message:"Password cannot be empty."})
    }
    
    if (password.length<4){
        res.status(400).json({message:"Password should have more than 3 charachters!"})
    }
    res.status(200).json({message:"Valid Email and Password"})

})

module.exports=userRouter