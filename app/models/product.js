import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product Name Must Be Provided"],
    },
    price: {
      type: Number,
      required: [true, "Product Price Must Be Provided"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 0,
    },
    company: {
      type: String,
      enum: {
        values: ["ikea", "liddy", "caressa", "marcos"],
        message: "{VALUE} is not supported",
      },
    },
  },
  {
    timestamps: true,
  }
);
ProductSchema.index({
  name: "text",
});
export default mongoose.model("Product", ProductSchema);
