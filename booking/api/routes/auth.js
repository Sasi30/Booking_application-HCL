import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)

export default router;

/* import Express  from "express";
const router=Express.Router();

router.get("/",(req,res)=>{
    res.send("hello i am  authontication")
})
router.get("/register",(req,res)=>{
    res.send("hello i am register authontication")
})
export default router; */