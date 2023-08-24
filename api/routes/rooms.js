import express from "express"
import { createRoom } from "../controllers/roomController";

const router = express.Router();

//CREATE
router.post("/:id",createRoom);
//GET
router.get("/:id", getHotel);
//GETALL
router.get("/", getAllHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id",verifyAdmin, deleteHotel);


export default router