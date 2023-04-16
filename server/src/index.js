import express from 'express'
const app=express();

import userRouter from './routes/userRoutes'


const PORT = 5000;

app.use("/users", userRouter)

app.get('/',(req,res)=>{
    res.send(`hello`)
})

app.listen(PORT, ()=>{
    console.log(`server started at port no. ${PORT} http://localhost:5000`)
})