require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const EMAIL = process.env.EMAIL;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
});

const User = mongoose.model('User', userSchema);


const sendEmail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: { user: EMAIL, pass: EMAIL_PASSWORD },
    });

    await transporter.sendMail({ from: EMAIL, to, subject, text });
};

// Routes
// Signup
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(400).json({ error: 'User already exists or invalid input' });
    }
});

// Signin
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ error: 'Invalid password' });

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Forgot Password
app.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const resetToken = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '15m' });
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;
        await user.save();

        await sendEmail(email, 'Password Reset', `Use this token to reset your password: ${resetToken}`);
        res.json({ message: 'Reset token sent to your email' });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Reset Password
app.post('/reset-password', async (req, res) => {
    const { token, newPassword } = req.body;
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findOne({ _id: decoded.userId, resetPasswordToken: token });

        if (!user || user.resetPasswordExpires < Date.now()) {
            return res.status(400).json({ error: 'Invalid or expired token' });
        }

        user.password = await bcrypt.hash(newPassword, 10);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.json({ message: 'Password reset successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => console.log(`Server Started on http://localhost:${PORT}`));