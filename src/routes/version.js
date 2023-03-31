const express = require('express')
const {createVersion,getVersion,getVersionDetail}= require('../controllers/version')
const router =  express.Router()

router.post('/versions',createVersion)
router.get('/versions',getVersion)
router.get('/2.2',getVersionDetail)

module.exports = router