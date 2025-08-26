import express from 'express';
import { signUp, logOut, login } from '../controllers/auth.controllers.js';

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logOut);

export default router;