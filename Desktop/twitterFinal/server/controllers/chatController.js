// controllers/chatController.js
import Chat from "../models/chat.model.js";

// Create new chat
export const createChat = async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    const existingChat = await Chat.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (existingChat) return res.status(200).json(existingChat);

    const newChat = new Chat({ members: [senderId, receiverId] });
    const savedChat = await newChat.save();
    res.status(201).json(savedChat);
  } catch (error) {
    res.status(500).json({ message: "Error creating chat", error });
  }
};

// Get all chats of a user
export const userChats = async (req, res) => {
  try {
    const chats = await Chat.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ message: "Error fetching chats", error });
  }
};

// Find chat between 2 users
export const findChat = async (req, res) => {
  try {
    const chat = await Chat.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });

    if (!chat) return res.status(404).json({ message: "Chat not found" });

    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ message: "Error finding chat", error });
  }
};
