const mongoos = require('mongoose')

const UsersSchema = new mongoos.Schema({
    name: String,
    email: String,
    password: String
})

const UsersModel=mongoos.model("Userss",UsersSchema)
module.exports=UsersModel