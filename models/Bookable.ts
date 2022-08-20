import mongoose from "mongoose";
import BookableEnum from "../enums/BookableEnum";
import UserAccount from "./UserAccount";

const bookableSchema = new mongoose.Schema({
    name: {
        type: String,
        enum : BookableEnum,
        required: true,
        minLength: 2,
        maxLength: 50,
    },
    description: String ,
    isReserved : {
        type: Boolean,
        default: false,
    },
    capacity : {
        type: Number,
        min: 0,
        default : 1,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for members count'
        }
    },
    bookedAt : Date,
    bookedBy : {
    type : String,
        uppercase: true,
},
    returnedAt : Date
}) ;

export default mongoose.model("BookableModel", bookableSchema);
