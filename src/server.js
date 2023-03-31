const express = require('express')
require("dotenv").config();
require("./db/db")
var cors = require('cors')

const app = express()
const userRoute = require('./routes/user')
const versionRoute = require('./routes/version')

const port = process.env.PORT || 6000;

app.use(cors())
app.use(express.json());
app.use('/api',userRoute)
app.use('/ocpi',versionRoute)

// database sync
  app.get("/", (req, res) => {
    res.send("Welcome to ocpi.");
  });

//listening to port
app.listen(port, () => {
  console.log(`Server is up on http://localhost:${port}`);
});

