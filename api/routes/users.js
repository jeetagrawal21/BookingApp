import express from "express"
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next) => {
//     res.send("Hey there user, you are logged in!")
// });

// router.get("/checkuser/:id", verifyUser, (req,res,next) => {
//     res.send("Hey there user, you are logged in! and you can delete your account!")
// });

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next) => {
//     res.send("Hey there admin, you are logged in! and you can delete all accounts!")
// });

//GET
router.get("/:id",verifyUser, getUser);
//GETALL
router.get("/",verifyAdmin, getAllUsers);
//UPDATE
router.put("/:id",verifyUser, updateUser);
//DELETE
router.delete("/:id",verifyUser, deleteUser);

export default router