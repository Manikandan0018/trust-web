import express from "express";
import {protectRoute} from "../middleware/protectRoute.js";
import {followUnFollowUser, getProfile, getSuggestedUsers, updateUser,getUserByUsername,getAllUsers} from '../controllers/user.controller.js'

const router  = express.Router();

// ✅ keep static routes first
router.get("/getAllUser", getAllUsers);

router.get("/profile/:username", protectRoute, getProfile);
router.post("/follow/:id", protectRoute, followUnFollowUser);
router.get("/suggested/", protectRoute, getSuggestedUsers);
router.post("/updateUser/", protectRoute, updateUser);
router.get("/:username", protectRoute, getUserByUsername);

export default router;
