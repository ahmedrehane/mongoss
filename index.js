let mongoose = require('mongoose')
let helpeSchema = new mongoose.user({
  firstName: String,
  lastName: String
  
})
module.exports = mongoose.model('User', helpeSchema)

let EmailModel = require('./email')
let msg = new EmailModel({
  email: 'ADA.LOVELACE@GMAIL.COM'
})
msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })