import mongoose from "mongoose";
import Package from "../enums/Package";

const horaryPriceSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        enum : Package
    },
    firstHour: {
        type: Number,
        required: true,
        min: 0,
    },
    halfHour: {
        type: Number,
        required: true,
        min: 0,
    },
    plus5hours: {
        type: Number,
        required: true,
        min: 0,
    }
});
//if card.studentReductionPrice is not null, then horaryPriceSchema.plus5hours = card.studentReductionPrice

export default mongoose.model("HoraryPriceModel", horaryPriceSchema);