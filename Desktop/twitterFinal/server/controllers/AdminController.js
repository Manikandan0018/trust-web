import Post from "../models/post.model.js";
import User from "../models/user.model.js";

// ✅ Get all posts with user and comments
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "username email")
      .populate("comments.user", "username email");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

// ✅ Delete a post
export const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    await Post.findByIdAndDelete(postId);
    res.status(200).json({ message: "Post deleted by admin" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete post" });
  }
};

// ✅ Delete a comment
export const deleteComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    await Post.findByIdAndUpdate(postId, {
      $pull: { comments: { _id: commentId } },
    });
    res.status(200).json({ message: "Comment deleted by admin" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
};

// ✅ Block a user
export const blockUser = async (req, res) => {
  try {
    const { userId } = req.params;
    await User.findByIdAndUpdate(userId, { isBlocked: true });
    res.status(200).json({ message: "User blocked by admin" });
  } catch (error) {
    res.status(500).json({ error: "Failed to block user" });
  }
};

// ✅ Unblock a user
export const unblockUser = async (req, res) => {
  try {
    const { userId } = req.params;
    await User.findByIdAndUpdate(userId, { isBlocked: false });
    res.status(200).json({ message: "User unblocked by admin" });
  } catch (error) {
    res.status(500).json({ error: "Failed to unblock user" });
  }
};
