import User from "../models/user.model.js"; // if needed
import Message from "../models/message.model.js"; // if needed
import Conversation from "../models/participants.model.js"
import ErrorHandler from "../utilities/errorHandler.utilities.js";
import { asyncHandler } from "../utilities/asyncHendler.utility.js";
import bcrypt from "bcryptjs";
import { sendToken } from "../utilities/jwtToken.utility.js";

export const register = asyncHandler(async (req, res, next) => {

  const { fullName, email, password, gender, avatar_img } = req.body || {};

  if (!email || !password || !gender || !fullName) {
    return next(new ErrorHandler("All fields are required", 400))
  }

  const user = await User.findOne({ email });

  if (user) {
    return next(new ErrorHandler("User already exists", 400))
  }

  const hashPassword = bcrypt.hashSync(password, 10);

  const avatar_gender = gender === "male" ? "boy" : "girl"
  const avatar = `https://avatar.iran.liara.run/public/${avatar_gender}?email={email}`


  const newUser = await User.create({
    fullName,
    email,
    password: hashPassword,
    gender,
    avatar_img: avatar
  })

  sendToken(newUser, res, "User created successFully")

});

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("All fields are required", 400))
  }

  const user = await User.findOne({ email });


  if (!user || !user.password) {
    return next(new ErrorHandler("email and password invalid ", 400))
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return next(new ErrorHandler("password dos't match", 400));
  }
  sendToken(user, res, "Login successfully")
})

export const logOut = asyncHandler((req, res, next) => {

  res
    .status(200) // 200 OK, not 301 (redirect not needed)
    .cookie("token", "", {
      httpOnly: true,
      maxAge: 0, 
    }).json({
      success: true,
      message: "Logout successful",
    });
});

export const getProfile = asyncHandler(async (req, res, next) => {

  const userId = req.user?._id

  if (!userId) {
    return next(new ErrorHandler("userId is not valid", 400))
  }

  const profile = await User.findById(userId)
  res.status(200).json({
    success: true,
    message: "User profile successfully",
    responseData: {
      profile,
    }
  })
})

export const getOtherUsers = asyncHandler(async (req, res, next) => {
  const otherUser = await User.find({ _id: { $ne: req.user?._id } })

  if (!otherUser) {
    return next(new ErrorHandler("No other users found", 400))
  }

  res.status(200).json({
    success: true,
    message: "Other users successfully",
    responseData: otherUser

  })
})

export const searchUser = asyncHandler(async (req, res, next) => {
  const search = req.query.search || "";   // ✅ take from query instead of body

  const users = await User.find({
    fullName: { $regex: search, $options: "i" }, // case-insensitive
  });

  if (!users || users.length === 0) {
    return next(new ErrorHandler("No users found", 400));
  }

  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    responseData: users,
  });
});


// User Profile API

// export const updateProfile = asyncHandler(async (req, res, next) => {
//   const userId = req.user?._id
//   const { fullName, email, gender, avatar_img } = req.body || {};

//   if (!userId || !fullName || !email || !gender || !avatar_img) {
//     return next(new ErrorHandler("All fields are required", 400))
//   }

//   const user = await User.findByIdAndUpdate(userId, {
//     fullName,
//     email,
//     gender,
//     avatar_img
//   })

//   if (!user) {
//     return next(new ErrorHandler("User not found", 400))
//   }

//   res.status(200).json({
//     success: true,
//     message: "User profile updated successfully",
//     responseData: user
//   })
// })