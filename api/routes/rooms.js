import express from "express"
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid",verifyAdmin,createRoom);
//GET
router.get("/:id", getRoom);
//GETALL
router.get("/", getAllRooms);
//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);


export default router