const mongoos = require('mongoose')

const FormSchema = new mongoos.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    animal: String,
    injury :String,
})

const FormModel=mongoos.model("Forms",FormSchema)
module.exports=FormModel