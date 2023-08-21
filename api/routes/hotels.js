import express from "express"
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelController.js";
import jwt from "jsonwebtoken";

const router = express.Router();

//CREATE
router.post("/", createHotel);
//GET
router.get("/:id", getHotel);
//GETALL
router.get("/", getAllHotel);
//UPDATE
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel);

export default router