import mongoose from "mongoose";
import Package from "../enums/Package";
import Activity from "./Activity";
import Service from "./Service";
import Bookable from "./Bookable";
import SubscriptionPrice from "./SubscriptionPrice";
import HoraryPrice from "./HoraryPrice";

const cardSchema = new mongoose.Schema({
    name : {
        type: String,
        enum : Package,
        required: true,
        default : Package.FREE,
    },
    proposedActivities : [Activity.schema] ,
    proposedServices : [Service.schema],
    proposedBookable : [Bookable.schema],
    studentReductionPrice : {
        type: Number,
        default : 20,
        min : 0,
    },
    subscriptionPrice : SubscriptionPrice.schema,
    horaryPrice : HoraryPrice.schema,
});

export default mongoose.model("CardModel", cardSchema);
