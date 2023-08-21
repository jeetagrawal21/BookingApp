import express from "express"
import { login, register } from "../controllers/authController.js";

const router = express.Router();

//Get user by id
router.get("/", (req,res) => {
})

// Register new user
router.post("/register", register)

// Login user
router.post("/login", login)

export default router