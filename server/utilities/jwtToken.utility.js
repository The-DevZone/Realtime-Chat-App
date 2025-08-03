import jwt from "jsonwebtoken";

// Utility to create and send token in cookie
export const sendToken = (user, res, message, statusCode = 200) => {
  const token = jwt.sign(
    { _id: user?._id },
    process.env.SECRET_KEY,
    { expiresIn: process.env.JWT_EXPIRE } // e.g. "1d"
  );

  res.status(statusCode).cookie("token", token, {
    httpOnly: true, // ✅ secure from XSS
    // secure: process.env.NODE_ENV === "production", // ✅ must be true for sameSite: "None"
    // sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // ✅ auto switch
    secure: false,
    sameSite: "Lax",
    maxAge: 24 * 60 * 60 * 1000 // ✅ 1 day
  }).json({
    success: true,
    message,
    responseData: {
      token,
      user
    }
  });
};
