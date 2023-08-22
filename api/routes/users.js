import express from "express"
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController";

const router = express.Router();

//GET
router.get("/:id", getUser);
//GETALL
router.get("/", getAllUsers);
//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);

export default router