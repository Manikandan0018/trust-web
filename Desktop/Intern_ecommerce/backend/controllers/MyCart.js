// controllers/cartController.js
import MyCartModel from '../models/MyCart.js';

export const addMyCart = async (req, res) => {
  try {
    console.log("➡️  Add to cart request body:", req.body);
    console.log("➡️  Logged-in user:", req.user); // Only available if protect middleware works

    const { name, price, description, image } = req.body;

    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized: No user found" });
    }

    const newCart = new MyCartModel({
      user: req.user._id, // assuming protect middleware sets req.user
      name,
      price,
      description,
      image,
    });

    await newCart.save();

    res.status(201).json({ message: "Product added to cart" });
  } catch (err) {
    console.error("❌ Error in addMyCart:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const getMyCart = async (req, res) => {
  try {
    const cartItems = await MyCartModel.find({ user: req.user._id });
    res.status(200).json(cartItems);
  } catch (error) {
    console.error("❌ Error in getMyCart:", error);
    res.status(500).json({ message: "Server error" });
  }
};

