import User from "../models/user.model.js"; // if needed
import { errorHendler } from "../utilities/errorHendler.utility.js";
import { asyncHandler } from "../utilities/asyncHendler.utility.js";
import bcrypt from "bcryptjs";
import { response } from "express";

const register = asyncHandler(async (req, res, next) => {

  const { firstName, userName, password, gender, avatar_img } = req.body || {};

  if (!userName || !password || !gender || !firstName || !avatar_img) {
    return next(new errorHendler("All fields are required", 400))
  }

  const user = await User.findOne({ userName });

  if (user) {
    return next(new errorHendler("User already exists", 400))
  }

  const hashPassword = bcrypt.hashSync(password, 10);

  const avatar_gender = gender === "male" ? "boy" : "girl"
  const avatar = `https://avatar.iran.liara.run/public/${avatar_gender}?username={username}`


  const newUser = await User.create({
    firstName,
    userName,
    password: hashPassword,
    gender,
    avatar_img: avatar
  })

  return res.status(200).json({
    success: true,
    message: "User created successfully",
    responseData: {
      newUser
    }
  });
});

export default register;


export const login = asyncHandler(async (req, res, next) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return next(new errorHendler("All fields are required", 400))
  }

  const user = await User.findOne({ userName });


  if (!user || !user.password) {
    return next(new errorHendler("userName and password invalid ", 400))
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(new errorHendler("password dos't match", 400));
  }

  res.status(200).json({
    success: true,
    message: "Login successfully",
    responseData: {
      user
    }
  })

})

