import express from "express"
import { register } from "../controllers/authController.js";

const router = express.Router();

//Get user by id
router.get("/", (req,res) => {
})

// Register new user
router.post("/register", register)

export default router