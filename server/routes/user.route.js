// ✅ server/routes/user.route.js
import express from "express";
import { register, login, getProfile, logOut, searchUser } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { getOtherUsers } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", isAuthenticated, logOut);
router.get("/get-profile", isAuthenticated, getProfile);
router.get("/other-users", isAuthenticated, getOtherUsers);
router.get("/search-users", isAuthenticated, searchUser);

export default router;
