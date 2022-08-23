"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MonthsOfEngagement_1 = __importDefault(require("../enums/MonthsOfEngagement"));
const Package_1 = __importDefault(require("../enums/Package"));
const subscriptionPriceSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        enum: Package_1.default,
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
        enum: MonthsOfEngagement_1.default,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value. Should be int for Months minimum engagement'
        }
    },
});
exports.default = mongoose_1.default.model("SubscriptionPriceModel", subscriptionPriceSchema);
