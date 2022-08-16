import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        },
    description: {
        type: String,
        required: true,
        minLength: 3,
        },
    }
)
export default mongoose.model("ProductModel", productSchema);