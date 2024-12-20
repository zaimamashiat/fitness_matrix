const User = require('../models/UserModel');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { username, email, phoneNumber, password, dob } = req.body;

        if (!username || !email || !phoneNumber || !password || !dob) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        const newUser = new User({ username, email, phoneNumber, password, dob});
        await newUser.save();
        res.status(201).json({ message: 'User created successfully.', user: newUser });
    } catch (err) {
        res.status(500).json({ message: 'Error creating user.', error: err.message });
    }
};

// Login user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({ 
            message: 'Login successful.', 
            token, 
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                phoneNumber: user.phoneNumber,
            }
        });
    } catch (err) {
        res.status(500).json({ message: 'Error logging in.', error: err.message });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password -dob -phoneNumber');
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users.', error: err.message });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password -dob -phoneNumber');
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching user.', error: err.message });
    }
};


// Update user
exports.updateUser = async (req, res) => {
    try {
        const updates = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        if (user.id != req.params.id){
            return res.status(404).json({ message: 'Cant Update this user. You cannot Update someone else. ' });
        }
        
        res.status(200).json({ message: 'User updated successfully.', user });
    } catch (err) {
        res.status(500).json({ message: 'Error updating user.', error: err.message });
    }
};

// Delete user
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        if (user.id != req.params.id){
            return res.status(404).json({ message: 'Cant Delete this user. You cannot delete someone else. ' });
        }
        res.status(200).json({ message: 'User deleted successfully.' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user.', error: err.message });
    }
};
