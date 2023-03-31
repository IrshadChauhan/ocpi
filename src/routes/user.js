const express = require('express')
const { createContact, getAllContact} = require('../controllers/user')
const router =  express.Router()

router.post('/contact',createContact)
router.get('/allContact',getAllContact)

module.exports = router