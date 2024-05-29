const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// Middleware to parse form data
router.use(express.urlencoded({ extended: true }));

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.post('/contact', async (req, res) => {
    const { fname, lname, email, query } = req.body;

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contact Us Form Submission from ${fname} ${lname}`,
        text: `Name: ${fname} ${lname}\nEmail: ${email}\nQuery: ${query}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send('Thank you for contacting us! We will get back to you shortly.');
    } catch (error) {
        console.error('Error sending email:', error);
        res.send('An error occurred while sending your message. Please try again later.');
    }
});

module.exports = router;
