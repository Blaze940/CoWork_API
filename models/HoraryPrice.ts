import mongoose from "mongoose";

const horaryPriceSchema = new mongoose.Schema({
    /*belongsTo:{
        // a remplacer par CARD_ID
        type: mongoose.Schema.Types.ObjectId,
        ref : "CardModel",
        required: true,
    },*/
    firstHour: {
        type: Number,
        required: true,
        min: 0,
    },
    secondHour: {
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