const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('public'));

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"4321",
    database:"Social_media"
})

const s = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'public/images')
    },
    filename:(req,file,cb) =>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})

const uploadImage = multer({
    storage:s
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
app.post('/Biodetails',(req,res)=>{
    // console.log(res.body)
    const sql = "UPDATE User_profile SET  Bio = ?, Location = ?, Education = ? WHERE User_id = (SELECT uses_id from user where User_name = ?)";
    const values = [
        req.body.Bio,
        req.body.Location,
        req.body.Education,
    ]
    const UserName = req.body.UserName
    console.log(values)
    db.query(sql,[req.body.Bio,req.body.Location,req.body.Education,UserName],(err,data)=>{
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

app.post('/uploadImage',uploadImage.single('image'),(req,res)=>{
    
    const image = req.file.filename 
    const UserName = req.body.UserName
    console.log(image,UserName)
    // const time = Date.now()
    const sql = 'UPDATE User_Profile Set Profile_picture = ? WHERE User_id = (SELECT uses_id from user where User_Name=?) '
    db.query(sql,[image,UserName],(error,result) =>{
        if (error) {
            console.error(error);
            res.status(500).send('Error uploading image.');
          } else {
            res.status(200).json({ message: 'Image uploaded successfully.'});
          }
        });
      });
app.post('/PostImage',uploadImage.single('image'),(req,res)=>{
    
    const Post = req.file.filename
    const UserName = req.body.UserName
    const date = new Date ()
    const PostTime = date.toISOString().split('T')[0] + ' '+ date.toTimeString().split(' ')[0]

    console.log(Post,UserName,PostTime)
    // const image = req.file.filename 
    // // console.log(image)
    // const time = Date.now()
    const values = [Post,PostTime]
    const sql = 'INSERT INTO Posts (`Post`,`PostTime`,`UserId`) VALUES (? ,(SELECT Uses_Id from user where user_name = ? )) '
    db.query(sql,[values,UserName],(error,result) =>{
        if (error) {
            console.error(error);
            res.status(500).send('Error uploading image.');
          } else {
            res.status(200).json({ message: 'Image uploaded successfully.'});
          }
        });
      });
      


app.post('/GetProfilePicture',(req,res)=>{
    const UserName = req.body
    // console.log(req.body)
    const sql = 'SELECT * FROM user_profile WHERE User_id = (SELECT Uses_id from user WHERE User_name = ?)';
    db.query(sql,[UserName],(error,result) =>{
        if (error) {
            console.error(error);
            res.status(500).send('Error retriving image.');
          } else {
            return res.json(result)
          }
        });
      });
app.post('/GetUserPosts',(req,res)=>{
    const UserName = req.body
    // console.log(req.body)
    const sql = 'SELECT * FROM POSTS WHERE userid = (SELECT Uses_id FROM user WHERE user_name =?)';
    db.query(sql,[UserName],(error,result) =>{
        if (error) {
            console.error(error);
            res.status(500).send('Error retriving image.');
          } else {
            return res.json(result)
          }
        });
      });
app.post('/AddLike',(req,res)=>{
    const PostId = req.body
    console.log("add",req.body)
    // console.log(req.body[0])
    // console.log(req.body[1])
    const sql = 'INSERT INTO LIKES (Postid,UserId) values(?,(SELECT USES_ID FROM USER WHERE USER_NAME = ?))';
    db.query(sql,[req.body[0],req.body[1]],(error,result) =>{
        if (error) {
            console.error(error);
            res.status(500).send('Error retriving image.');
          } else {
            return res.json(result)
          }
        });
      });
app.post('/RemoveLike',(req,res)=>{
    const PostId = req.body
    console.log("remove",req.body)
    const sql = 'DELETE FROM LIKES WHERE POSTID = ? AND USERID = (SELECT USES_ID FROM USER WHERE USER_NAME = ?)';
    db.query(sql,[req.body[0],req.body[1]],(error,result) =>{
        if (error) {
            console.error(error);
            res.status(500).send('Error retriving image.');
          } else {
            return res.json(result)
          }
        });
      });
app.get('/GetPosts',(req,res)=>{
    const sql = 'select Post,postid,user_Name from Posts join user on userid = uses_id  order by postid desc';
    db.query(sql,(error,result) =>{
        if (error) {
            console.error(error);
            res.status(500).send('Error retriving image.');
          } else {
            return res.json(result)
          }
        });
      });
app.get('/GetAllPosts',(req,res)=>{
    const sql = 'select Post,postid,user_Name from Posts join user on userid = uses_id  ';
    db.query(sql,(error,result) =>{
        if (error) {
            console.error(error);
            res.status(500).send('Error retriving image.');
          } else {
            return res.json(result)
          }
        });
      });




app.get('/Getlikes',(req,res)=>{
    console.log("from get likes",req.body)
    const sql = 'CALL CountLikes;';
    db.query(sql,(error,result) =>{
        if (error) {
            console.error(error);
            res.status(500).send('Error retriving image.');
          } else {
            return (res.json(result))
          }
        });
      });

app.listen(3000,()=>{
    console.log("listening");
})
