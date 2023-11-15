const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"4321",
    database:"Social_media"
})

app.post('/SignUp',(req,res)=>{
    const sql = "INSERT INTO User (`User_Name`,`Phone_Number`,`Mail_Id`,`DOB`,`Password`,`Name`) value (?)";
    const values = [
        req.body.UserName,
        req.body.PhoneNo,
        req.body.Email,
        req.body.DOB,
        req.body.Password,
        req.body.FullName
    ]
    db.query(sql,[values],(err,data)=>{
        if(err){
            console.log(err);
            return res.json("Error");
        }
        return res.json(data);
    })
})
app.post('/',(req,res)=>{
    const sql = "select * from user where `User_Name` =? and `Password` = ?";
    db.query(sql,[req.body.UserName,req.body.Password],(err,data)=>{
        if(err){
            console.log(err);
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Success");
        }
        else{
            return res.json("Failure");
        }
    })
})

app.listen(3000,()=>{
    console.log("listening");
})
