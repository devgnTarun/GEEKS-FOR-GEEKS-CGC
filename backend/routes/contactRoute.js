const express = require('express');
const router = express.Router();
const Contact = require('../models/contactSchema')
// const sendEmail = require('../utils/sendEmail')


router.post('/contact' , async( req, res ) => {
    try {
        const {name , email, phoneNo, message , course} = req.body;

        // Create contact message function
        const contactMe = await Contact.create({name , email, phoneNo, message , course})
        // await sendEmail({name , email, phoneNo, message , course})
        res.status(200).json({success : true, contactMe})
    } catch (error) {
        res.status(500).json({success :false , "message"  : error.message})
    }
})

module.exports = router
