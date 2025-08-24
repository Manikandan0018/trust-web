// controllers/messageController.js
import Message from "../models/message.model.js";

// Get all messages of a chat
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ chatId: req.params.chatId });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Send message
export const addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  try {
    const message = new Message({
      chatId,
      senderId,
      text,
      readBy: [senderId], // sender already read his own msg
    });
    const savedMessage = await message.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Mark messages as read when user opens chat
export const markAsRead = async (req, res) => {
  try {
    const { chatId, userId } = req.body;
    await Message.updateMany(
      { chatId, readBy: { $ne: userId } }, // not yet read by user
      { $push: { readBy: userId } }
    );
    res.status(200).json({ message: "Messages marked as read" });
  } catch (err) {
    res.status(500).json(err);
  }
};
