"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Package_1 = __importDefault(require("../enums/Package"));
const ServiceEnum_1 = __importDefault(require("../enums/ServiceEnum"));
const cardSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        enum: Package_1.default,
        required: true,
        default: Package_1.default.FREE,
    },
    proposedServices: [{
            type: String,
            enum: ServiceEnum_1.default,
        }],
    studentReductionPrice: {
        type: Number,
        min: 0,
    },
    subscriptionPrice: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'SubscriptionPriceModel',
    },
    horaryPrice: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'HoraryPriceModel',
    }
});
exports.default = mongoose_1.default.model("CardModel", cardSchema);
