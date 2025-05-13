import express from 'express'
import { checkAuth, login, logout, signup, updateProfile } from '../controllers/auth.controller.js';
import { protectRote } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

router.put("/update-profile" ,protectRote ,updateProfile)

router.get("/check",protectRote,checkAuth);

export default router;