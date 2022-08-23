import mongoose, {Schema} from "mongoose";
import MonthsOfEngagement from "../enums/MonthsOfEngagement";
import Package from "../enums/Package";

const subscriptionPriceSchema = new mongoose.Schema({
    name: {
        type: String,
        enum : Package,
        required: true,
        minLength: 3,
        maxLength: 255
    },
    description: {
        type: String,
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
    minMonthsEngagement: {
        type: Number,
        enum: MonthsOfEngagement,
        required: true,
        min: 0,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for Months minimum engagement'
        }
    },
});

export default mongoose.model("SubscriptionPriceModel", subscriptionPriceSchema);