"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const horaryPriceSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model("HoraryPriceModel", horaryPriceSchema);
