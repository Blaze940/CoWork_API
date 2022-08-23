import mongoose from "mongoose";
import Package from "../enums/Package";
import Activity from "./Activity";
import Service from "./Service";
import Bookable from "./Bookable";
import ServiceEnum from "../enums/ServiceEnum";

const cardSchema = new mongoose.Schema({
    name : {
        type: String,
        enum : Package,
        required: true,
        default : Package.FREE,
    },
    proposedServices : [{
        type : String,
        enum : ServiceEnum,
    }],
    studentReductionPrice : {
        type: Number,
        min : 0,
    },
    subscriptionPrice : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'SubscriptionPriceModel',
    },
    horaryPrice : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'HoraryPriceModel',
    }
});

export default mongoose.model("CardModel", cardSchema);
