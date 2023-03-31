const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.LOCALMONGOURI, {
  useNewUrlParser: true,
}).then(() =>
 console.log("db connected"))
.catch((e) => console.log(e))