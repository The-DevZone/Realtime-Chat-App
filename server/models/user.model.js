
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    // unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },

  avatar_img: {
    type: String, // Usually image URL path or base64 string
    required: true,
    default: ''   // optional default
  }
}, { timestamps: true });

// Export the model
const User = mongoose.model('User', UserSchema);
export default User;
