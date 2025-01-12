const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

// Register User
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password });
    res.status(201).json({ token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login User
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({ token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
