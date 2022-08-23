"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Package_1 = __importDefault(require("../enums/Package"));
const horaryPriceSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        enum: Package_1.default
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
exports.default = mongoose_1.default.model("HoraryPriceModel", horaryPriceSchema);
