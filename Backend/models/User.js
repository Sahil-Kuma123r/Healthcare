const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true, 
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true, 
    trim: true,
    // match: [/.+\@.+\..+/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters long'],

  },
  userType: {
    type: String,
    enum: ['User', 'Doctor'],
    default: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },

 
}, {timestamps:true});



const User = mongoose.model('User', UserSchema);

module.exports = User;
