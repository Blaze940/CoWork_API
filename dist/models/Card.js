"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Package_1 = __importDefault(require("../enums/Package"));
const cardSchema = new mongoose_1.default.Schema({
    packageName: {
        type: Package_1.default,
        unique: true,
        required: true,
        default: Package_1.default.FREE,
    },
    accesses: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "ActivityModel",
        },
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "ServiceModel",
        },
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "BookableModel",
        }],
    studentReductionPrice: {
        type: Number,
        default: 20,
        min: 0,
    },
    subscriptionPrice: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "SubscriptionPriceModel",
        required: true
    },
    horaryPrice: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "HoraryPriceModel",
        required: true,
    }
});
exports.default = mongoose_1.default.model("CardModel", cardSchema);
