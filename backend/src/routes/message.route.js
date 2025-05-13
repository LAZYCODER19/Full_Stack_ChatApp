import express from 'express'
import { protectRote } from '../middleware/auth.middleware.js';
import { getMessages, getUsersForSidebar, sendMessage } from '../controllers/message.controller.js';

const router = express.Router()

router.get("/users",protectRote,getUsersForSidebar)
router.get("/:id",protectRote,getMessages)
router.post("/send/:id",protectRote,sendMessage)

export default router;