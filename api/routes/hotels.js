import express from "express"
import { createError } from "../utils/error.js";
import { countByCity, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelController.js";
import jwt from "jsonwebtoken";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/",verifyAdmin, createHotel);
//GET
router.get("/find/:id", getHotel);
//GETALL
router.get("/", getAllHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id",verifyAdmin, deleteHotel);

router.get("/countByCity", countByCity);
router.get("/countByType", getHotel);


export default router