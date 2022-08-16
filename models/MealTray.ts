import mongoose from "mongoose";

const mealTraySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
    },
    description: String ,
    menu: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductModel",
    }],
}) ;

export default mongoose.model("MealTrayModel", mealTraySchema);