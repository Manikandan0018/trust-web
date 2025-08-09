import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cartItems: [
    {
      name: String,
      price: Number,
      image: String,
      quantity: Number,
    },
  ],
  shippingAddress: {
    address: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  totalPrice: Number,
  status: {
    type: String,
    enum: ["Preparing", "Shipped", "Out for Delivery", "Delivered"],
    default: "Preparing",
  },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
