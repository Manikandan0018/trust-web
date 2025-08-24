import express from "express";
import {
  getAllPosts,
  deletePost,
  deleteComment,
  blockUser,
  unblockUser,
} from '../controllers/AdminController.js';

const router = express.Router();

// ✅ Admin routes
router.get("/posts", getAllPosts);
router.delete("/posts/:postId", deletePost);
router.delete("/posts/:postId/comments/:commentId", deleteComment);
router.put("/users/block/:userId", blockUser);
router.put("/users/unblock/:userId", unblockUser);

export default router;
