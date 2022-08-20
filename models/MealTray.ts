import mongoose from "mongoose";
import Product from "../models/Product";

const mealTraySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
    },
    description: String ,
    menu: [Product.schema],
}) ;

export default mongoose.model("MealTrayModel", mealTraySchema);