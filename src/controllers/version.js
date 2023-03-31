const Version = require("../models/version")

const createVersion = async (req,res)=>{
  try {
    const versionDoc = new Version({
      version: { version: 2.2, url: 'http://localhost:8080/ocpi/2.2' },
      endpoints:  [
        {
            "identifier": "cdrs",
            "role": "SENDER",
            "url": "http://localhost:8080/ocpi/sender/2.2/cdrs"
        },
        {
            "identifier": "cdrs",
            "role": "RECEIVER",
            "url": "http://localhost:8080/ocpi/receiver/2.2/cdrs"
        },
        {
            "identifier": "commands",
            "role": "SENDER",
            "url": "http://localhost:8080/ocpi/sender/2.2/commands"
        },
        {
            "identifier": "commands",
            "role": "RECEIVER",
            "url": "http://localhost:8080/ocpi/receiver/2.2/commands"
        },
        {
            "identifier": "credentials",
            "role": "SENDER",
            "url": "http://localhost:8080/ocpi/2.2/credentials"
        },
        {
            "identifier": "hubclientinfo",
            "role": "SENDER",
            "url": "http://localhost:8080/ocpi/2.2/hubclientinfo"
        },
        {
            "identifier": "locations",
            "role": "SENDER",
            "url": "http://localhost:8080/ocpi/sender/2.2/locations"
        },
        {
            "identifier": "locations",
            "role": "RECEIVER",
            "url": "http://localhost:8080/ocpi/receiver/2.2/locations"
        },
        {
            "identifier": "sessions",
            "role": "SENDER",
            "url": "http://localhost:8080/ocpi/sender/2.2/sessions"
        },
        {
            "identifier": "sessions",
            "role": "RECEIVER",
            "url": "http://localhost:8080/ocpi/receiver/2.2/sessions"
        },
        {
            "identifier": "tariffs",
            "role": "SENDER",
            "url": "http://localhost:8080/ocpi/sender/2.2/tariffs"
        },
        {
            "identifier": "tariffs",
            "role": "RECEIVER",
            "url": "http://localhost:8080/ocpi/receiver/2.2/tariffs"
        },
        {
            "identifier": "tokens",
            "role": "SENDER",
            "url": "http://localhost:8080/ocpi/sender/2.2/tokens"
        },
        {
            "identifier": "tokens",
            "role": "RECEIVER",
            "url": "http://localhost:8080/ocpi/receiver/2.2/tokens"
        }
    ]
    });
    
    // Save the document to the database
    versionDoc.save()
      .then(() => {
        res.send('Version document saved successfully')
      })
      .catch((error) => {
        console.error('Error saving Version document', error);
      });
  } catch (error) {
    res.status(500).send(error)
  }
}


const getVersion=async (req,res)=>{
  try {
    const user = await Version.find()
    res.status(200).send(data)
  } catch (error) {
    res.status(400).send(error)
  }
}

const getVersionDetail=async (req,res)=>{
  try {
    const user = await Version.find()
    res.status(200).send(data)
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {createVersion,getVersion,getVersionDetail}