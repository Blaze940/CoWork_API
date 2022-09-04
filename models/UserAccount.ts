import mongoose from "mongoose";
import userRole  from "../enums/UserRole";
import Bookable from "./Bookable";
import Activity from "./Activity";
import MealTray from "./MealTray";
import Registration from "./Registration";

export const userAccountSchema = new mongoose.Schema({
    pseudo: {
        type: String,
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
        maxLength: 1024,
    },
    role: {
        type: String,
        enum : userRole,
        default: userRole.CLIENT,
    },
    mealTray : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'MealTrayModel',
    },
    booked : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'BookableModel'
    }],
    participations : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'ActivityModel'
    }],
    registerForm : Registration.schema
});

export default mongoose.model("UserAccountModel", userAccountSchema);