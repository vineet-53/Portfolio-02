const mongoose = require("mongoose")
const contactSchema = new mongoose.Schema({
     name:String
     ,email:{
          type: String,
          unique : true
     }
})

module.exports =  Contact  = mongoose.model("Contact" , contactSchema);