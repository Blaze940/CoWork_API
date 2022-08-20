import mongoose from "mongoose";
import userRole  from "../enums/UserRole";
import Bookable from "./Bookable";
import Activity from "./Activity";
import MealTray from "./MealTray";

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
        maxLength: 1024,
    },
    role: {
        type: userRole,
        default: userRole.CLIENT,
        required: true,
    },
    reservations : [Bookable.schema,MealTray.schema],
    participations : [Activity.schema]
});

export default mongoose.model("UserAccountModel", userAccountSchema);