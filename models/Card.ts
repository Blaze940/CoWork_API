import mongoose from "mongoose";
import Package from "../enums/Package";

const cardSchema = new mongoose.Schema({
    packageName : {
        type: Package,
        unique: true,
        required: true,
        default : Package.FREE,
    },
    accesses : [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "ActivityModel",
        },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ServiceModel",
        },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BookableModel",
        }],
    studentReductionPrice : {
        type: Number,
        default : 20,
        min : 0,
    },
    subscriptionPrice : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubscriptionPriceModel",
        required : true
    },
    horaryPrice : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HoraryPriceModel",
        required : true,
    }
});

export default mongoose.model("CardModel", cardSchema);
