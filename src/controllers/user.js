const User = require("../models/user")

const createContact=async (req,res)=>{
  try {
    const name = req.body.name
    const phonenumber = req.body.phonenumber
    const otherphonenumber = req.body.otherphonenumber
    const email = req.body.email
    
  const user = new User({name, phonenumber, otherphonenumber, email})
    await user.save()
    res.status(201).send(user)
  } catch (error) {
    res.status(400).send(error)
  }
}


const getAllContact=async (req,res)=>{
  try {
    const user = await User.find().sort({name:1})
    const data = user.map(a => ({ "name": a.name, "phone_number": a.phonenumber}) )
    res.status(200).send(data)
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {createContact,getAllContact}