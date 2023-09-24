const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/sendEmail')


router.post('/contact' , async( req, res ) => {
    try {
        const {name , email, phoneNo, message , course} = req.body;
        
        await sendEmail({name , email, phoneNo, message , course})
        res.status(200).json({success : true, options: {name , email, phoneNo, message , course} })
    } catch (error) {
        res.status(500).json({success :false, options})
    }
})

module.exports = router
