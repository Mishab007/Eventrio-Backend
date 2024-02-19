const express = require("express")
const router = express.Router()
const {postSignup} = require("../controllers/maincontroller")


router.post('/signup', postSignup)

module.exports = router