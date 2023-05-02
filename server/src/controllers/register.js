const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const register = async (req, res, next) => {
    try {
      const { email, password, confirmPassword, name } = req.body;
  
       // Check if all fields are present
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ 
        message: 'All fields are required.'
       });
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match.' });
    }
  
      // check if user with email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }
  
      // hash password and create user
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ email, password: hashedPassword, name });
      await user.save();
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      next(err);
    }
  };


  module.exports=register