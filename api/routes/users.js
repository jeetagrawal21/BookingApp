import express from "express"
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next) => {
    res.send("Hey there user, you are logged in!")
});

router.get("/checkuser/:id", verifyUser, (req,res,next) => {
    res.send("Hey there user, you are logged in! and you can delete your account!")
});

//GET
router.get("/:id", getUser);
//GETALL
router.get("/", getAllUsers);
//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);

export default router