const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    phonenumber: {
        type: Number,
        unique: true,
    required: true,
    validate(value) {
        if (value.toString().length != 10) {
            throw new Error('Number should be 10 digit')
        }
    }},
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
        if (!validator.isEmail(value)) {
            throw new Error('Email is invalid')
        }
    }
},

}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User