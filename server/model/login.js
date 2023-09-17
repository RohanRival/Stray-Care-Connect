const mongoos = require('mongoose')

const loginSchema = new mongoos.Schema({
    email: String,
    password: String
})

const UsersModel=mongoos.model("Logins",loginSchema)
module.exports=UsersModel