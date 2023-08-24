import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import {createErrorr} from "../utils/error.js";

//Create a room
export const createRoom = async (req,res,next) => {

    const hotelId = req.params.id;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();

        try{
            await Hotel.findById(hotelId, {$push : {rooms: savedRoom._id}});

        }
        catch(error){
            next(error);
        }
        res.status(200).json(savedRoom);
    } catch (error) {
        next(error);
    }
}

// Update a room
export const updateHotel = async (req,res, next) => {
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedRoom)
    }catch(err){
        next(err)
    }
}

// Delete a room
export const deleteRoom = async (req,res, next) => {
    try{
        await Room.findByIdAndDelete(req.params.id);
        res.status(200).json("Room has been removed.")
    }catch(err){
        res.status(500).json(err)
    }
}

// Get a room
export const getRooms = async (req,res,next) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(rooms);
    } catch (error) {
        next(error);
    }
}

export const getRoom = async (req,res, next) => {
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }catch(err){
        next(err)
    }
}

export const getAllHotel = async (req,res, next) => {
    try{
        const allHotels = await Hotel.find()
        res.status(200).json(allHotels)
    }catch(err){
        next(err)
    }
}