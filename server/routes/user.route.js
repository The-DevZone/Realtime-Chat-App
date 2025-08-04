// ✅ server/routes/user.route.js
import express from "express";
import { register, login, getProfile, logOut } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { getOtherUsers } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/get-profile", isAuthenticated, getProfile);
router.post("/logout", isAuthenticated, logOut);
router.get("/other-users", isAuthenticated, getOtherUsers);

export default router;
