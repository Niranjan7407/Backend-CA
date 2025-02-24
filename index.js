const express=require('express');
const app=express();
const userRouter=require('./Controllers/User');

const port=3000;
app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`)
})

app.use(express.json());

app.use('/login',userRouter);
