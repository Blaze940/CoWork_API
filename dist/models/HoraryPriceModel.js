"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const horaryPriceSchema = new mongoose_1.default.Schema({
    belongsTo: {
        type: String
    },
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
exports.default = mongoose_1.default.model("HoraryPrice", horaryPriceSchema);
