const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/sendEmail')


router.post('/contact' , async(req, res ) => {
    try {
        const {name , email, phoneNo, message , course, branch} = req.body;
        const options = {name , email, phoneNo, message , course, branch};

        sendEmail(options)
    } catch (error) {
        res.status(500).json({success :false, options})
    }
})

module.exports = router
