import express from "express";
import { getMessages, addMessage, markAsRead } from "../controllers/MessageController.js";

const router = express.Router();

router.get("/:chatId", getMessages);
router.post("/", addMessage);
router.post("/markAsRead", markAsRead);

export default router;
