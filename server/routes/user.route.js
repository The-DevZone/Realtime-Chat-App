// ✅ server/routes/user.route.js
import express from "express";
import  { register, login, getProfile } from "../controllers/user.controller.js";
import { isAuthntication } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login" , login);
router.get("/get-profile" , isAuthntication , getProfile);

export default router;
