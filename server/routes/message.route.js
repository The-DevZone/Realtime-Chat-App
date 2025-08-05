// import sendMessage from "../controllers/message.controller.js"
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

import express from "express";
const router = express.Router();


router.post("/send/:receiverId", isAuthenticated, sendMessage);
router.get("/get-message/:otherParticipant", isAuthenticated, getMessages);

export default router;