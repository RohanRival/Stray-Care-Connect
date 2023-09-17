const express = require("express")
const mongoos = require('mongoose')
const cors = require("cors")
const UsersModel=require("./model/Users.js")
const loginModel=require("./model/login")
const FormModel=require("./model/form")

const app = express()
app.use(express.json()) 
app.use(cors())

mongoos.connect("mongodb://127.0.0.1:27017/Users")

app.post('/login',(req, res) =>{
   const{email,password} = req.body;
   UsersModel.findOne({email: email}) 
   .then(Userss =>{
      if(Userss){
         if(Userss.password === password){
            res.json("success")

         } else{
            res.json("password is incorrect")
         }
      } else{
         res.json("no record")
      }
   })

})

app.post('/register',(req,res)=>{
UsersModel.create(req.body)
.then(Userss =>res.json(Userss))
.catch(err =>res.json(err))
})

app.post('/form',(req,res)=>{
    FormModel.create(req.body)
    .then(Forms =>res.json(Forms))
    .catch(err =>res.json(err))
    })

app.listen(3001,()=>{
   console.log("server is runing")
})

