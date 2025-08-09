import express from "express";
import {addMyCart,getMyCart} from "../controllers/MyCart.js";
import {protect} from '../middleware/auth.js'
const router = express.Router();

router.get("/getMyCart",protect, getMyCart);
router.post("/addMyCart",protect, addMyCart);


export default router;
