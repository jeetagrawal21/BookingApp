import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

//Create a room
export const createRoom = async (req,res,next) => {

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();

        try{
            await Hotel.findByIdAndUpdate(hotelId, {$push : {rooms: savedRoom._id},
            });

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
export const updateRoom = async (req,res, next) => {
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedRoom)
    }catch(err){
        next(err)
    }
}

// Delete a room
export const deleteRoom = async (req,res, next) => {
    const hotelId = req.params.hotelid;
    try{
        await Room.findByIdAndDelete(req.params.id);
        try{
            await Hotel.findByIdAndUpdate(hotelId, {$pull : {rooms: req.params.id}
            });
        }
        catch(err){
            next(err);
        }
        res.status(200).json("Room has been removed.")
    }catch(err){
        res.status(500).json(err)
    }
}

// Get a room
export const getRoom = async (req,res,next) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (error) {
        next(error);
    }
}
//Get all rooms
export const getAllRooms = async (req,res, next) => {
    try{
        const allRooms = await Room.find()
        res.status(200).json(allRooms)
    }catch(err){
        next(err)
    }
}