// import sendMessage from "../controllers/message.controller.js"
import { sendMessage } from "../controllers/message.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

import express from "express";
// import { isAuthenticated } from "../middlewares/auth.middleware";
const router = express.Router();


router.post("/send/:receiverId", isAuthenticated, sendMessage);

export default router;
