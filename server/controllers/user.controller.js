import User from "../models/user.model.js"; // if needed
import Message from "../models/message.model.js"; // if needed
import Conversation from "../models/participants.model.js"
import { errorHendler } from "../utilities/errorHendler.utility.js";
import { asyncHandler } from "../utilities/asyncHendler.utility.js";
import bcrypt from "bcryptjs";
import { sendToken } from "../utilities/jwtToken.utility.js";


export const register = asyncHandler(async (req, res, next) => {

  const { firstName, email, password, gender, avatar_img } = req.body || {};

  if (!email || !password || !gender || !firstName || !avatar_img) {
    return next(new errorHendler("All fields are required", 400))
  }

  const user = await User.findOne({ email });

  if (user) {
    return next(new errorHendler("User already exists", 400))
  }

  const hashPassword = bcrypt.hashSync(password, 10);

  const avatar_gender = gender === "male" ? "boy" : "girl"
  const avatar = `https://avatar.iran.liara.run/public/${avatar_gender}?email={email}`


  const newUser = await User.create({
    firstName,
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
    return next(new errorHendler("All fields are required", 400))
  }

  const user = await User.findOne({ email });


  if (!user || !user.password) {
    return next(new errorHendler("email and password invalid ", 400))
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(new errorHendler("password dos't match", 400));
  }

  sendToken(user, res, "Login successfully")

})

export const getProfile = asyncHandler(async (req, res, next) => {

  const userId = req.user?._id

  if (!userId) {
    return next(new errorHendler("userId is not valid", 400))
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

export const logOut = asyncHandler((req, res, next) => {

  res
    .status(200) // 200 OK, not 301 (redirect not needed)
    .cookie("token", "", {
      httpOnly: true,
      maxAge: 0, // expire immediately
      // secure: true, // use in production with HTTPS
      // sameSite: "Lax"
    })
    .json({
      success: true,
      message: "Logout successful",
    });
});

export const getOtherUsers = asyncHandler(async (req, res, next) => {
  const otherUser = await User.find({ _id: { $ne: req.user?._id } })

  if (!otherUser) {
    return next(new errorHendler("No other users found", 400))
  }

  res.status(200).json({
    success: true,
    message: "Other users successfully",
    responseData: otherUser

  })
})


// User Profile API

export const updateProfile = asyncHandler(async (req, res, next) => {
  const userId = req.user?._id
  const { firstName, email, gender, avatar_img } = req.body || {};

  if (!userId || !firstName || !email || !gender || !avatar_img) {
    return next(new errorHendler("All fields are required", 400))
  }

  const user = await User.findByIdAndUpdate(userId, {
    firstName,
    email,
    gender,
    avatar_img
  })

  if (!user) {
    return next(new errorHendler("User not found", 400))
  }

  res.status(200).json({
    success: true,
    message: "User profile updated successfully",
    responseData: user
  })
})