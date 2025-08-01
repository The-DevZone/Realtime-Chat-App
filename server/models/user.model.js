
import  express  from 'express';

// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar_img: {
    type: String, // Usually image URL path or base64 string
    default: ''   // optional default
  }
},{timestamps:true});

// Export the model
const User = mongoose.model('User', UserSchema);
export default User;
