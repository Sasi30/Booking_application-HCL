import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
//import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;


/* import  Express  from "express";
import Hotel from "../models/Hotel.js";
const router = Express.Router();

router.post("/",async(req,res)=>{
  const newHotel = new Hotel(req.body)
  try{
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
  }
  catch(err){
res.status(500).json(err)
  }*/