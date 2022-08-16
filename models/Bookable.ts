import mongoose from "mongoose";
import BookableEnum from "../enums/BookableEnum";

const bookableSchema = new mongoose.Schema({
    name: {
        type: BookableEnum,
        required: true,
        minLength: 2,
        maxLength: 50,
    },
    description: String ,
    isAvailable : {
        type: Boolean,
        default: true,
    },
    capacity : {
        type: Number,
        min: 0,
        default : 1,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for members count'
        }
    }
}) ;

export default mongoose.model("BookableModel", bookableSchema);
