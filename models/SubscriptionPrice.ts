import mongoose from "mongoose";
import MonthsOfEngagement from "../enums/MonthsOfEngagement";

const subscriptionPriceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 255
    },
    priceWithEng: {
        type: Number,
        required: true,
        min: 0
    },
    priceWithoutEng: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
    },
    minMonthsEngagement: {
        type: MonthsOfEngagement,
        required: true,
        min: 0,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for Months minimum engagement'
        }
    },
    }
);

export default mongoose.model("SubscriptionPriceModel", subscriptionPriceSchema);