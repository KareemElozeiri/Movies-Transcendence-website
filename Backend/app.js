const express = require("express")
require("dotenv").config();


//routers 
const userRouter = require("./routes/user.router");

//initializing app
const app = express(); 


app.use(express.json());
app.use("/api/user", userRouter);


app.listen(process.env.PORT,()=>{
    console.log(`Listening on port: ${process.env.PORT}`);
});   