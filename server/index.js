
const express=require("express");
const mongoose=require("mongoose");

const authRouter=require("./routes/auth");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
//relative importing



const PORT=3000;
const app=express();
const DB="mongodb+srv://utsav74328:Utsav123@cluster0.fzsbwn2.mongodb.net/?retryWrites=true&w=majority";


//middlewear //client middleware server client stops not continuos

app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

mongoose.connect(DB).then(()=>{
    console.log("connection successful");})
    .catch((e)=>{
        console.log(e);
    });

//then is same as await but here we dont have function

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`connected as port ${PORT}`);
});


//Get,Put post delete update ->create read update delete
