import jwt from "jsonwebtoken";
import { asyncHandler } from "../utilities/asyncHendler.utility.js";
import { errorHendler } from "../utilities/errorHendler.utility.js";

export const isAuthntication = asyncHandler((req, res, next) => {
  const token = req.cookies.token; // ✅ get token from cookies

  if (!token) {
    return next(new errorHendler("Unauthorized: No token", 400));
  }

  let tokenData;
  try {
    tokenData = jwt.verify(token, process.env.SECRET_KEY); // ✅ correct: token, secret
  } catch (error) {
    return next(new errorHendler("Invalid token", 401));
  }

  // req.userId = tokenData._id;
   req.user = { _id: tokenData._id };
  next();
});
