import Hotel from "../models/Hotel.js"

export const createHotel = async (req,res,next) => {
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err)
    }
}

export const updateHotel = async (req,res, next) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedHotel)
    }catch(err){
        next(err)
    }
}
export const deleteHotel = async (req,res, next) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been removed.")
    }catch(err){
        res.status(500).json(err)
    }
}
export const getHotel = async (req,res, next) => {
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }catch(err){
        next(err)
    }
}

export const getAllHotel = async (req,res, next) => {
    try{
        // This is for limit query 
        const {min,max,limit,featured, ...others} = req.query;
        const allHotels = await Hotel.find({
        ...others, cheapestPrice:{$gt:min | 1, $lt:max || 999}
        
        }).limit(parseInt(limit))
        res.status(200).json(allHotels)
    }catch(err){
        next(err)
    }
}

export const countByCity = async (req,res, next) => {

    const cities = req.query.cities.split(",")

    try{
        const cityList = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(cityList);
    }catch(err){
        next(err)
    }
}

export const countByType = async (req,res, next) => {
try{
    const hotelCount = await Hotel.countDocuments({type:"Hotel"})
    const apartmentCount = await Hotel.countDocuments({type:"apartment"})
    const resortCount = await Hotel.countDocuments({type:"resort"})
    const villaCount = await Hotel.countDocuments({type:"villa"})
    const cabinCount = await Hotel.countDocuments({type:"cabin"})


    res.status(200).json([
        {type:"hotel", count: hotelCount},
        {type:"apartments", count: apartmentCount},
        {type:"resorts", count: resortCount},
        {type:"villas", count: villaCount},
        {type:"cabins", count: cabinCount}
    ]);
    }catch(err){
        next(err)
    }
}