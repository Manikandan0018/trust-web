import mongoose from "mongoose";

const myCartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  price: String,
  description: String,
  image: String,
  quantity: { type: Number, default: 1 }, // ✅ ADD THIS LINE
}, { timestamps: true });


export default mongoose.model("MyCart", myCartSchema);
