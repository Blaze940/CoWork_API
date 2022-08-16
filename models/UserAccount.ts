import mongoose from "mongoose";
import  userRole  from "../enums/UserRole";

export const userAccountSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 255,
        unique : true
    },
    email: {
        type: String,
        unique : true,
        required: true,
        minLength: 2,
        maxLength: 255,
    },
    password: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 255,
    },
    role: {
        type: userRole,
        default: userRole.CLIENT,
        required: true,
    },
    reservations : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'BookableModel',
    },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MealTrayModel',
    },],
    participations : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'ActivityModel',
    }],

});

export default mongoose.model("UserAccountModel", userAccountSchema);