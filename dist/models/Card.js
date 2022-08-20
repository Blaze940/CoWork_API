"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Package_1 = __importDefault(require("../enums/Package"));
const Activity_1 = __importDefault(require("./Activity"));
const Service_1 = __importDefault(require("./Service"));
const Bookable_1 = __importDefault(require("./Bookable"));
const SubscriptionPrice_1 = __importDefault(require("./SubscriptionPrice"));
const HoraryPrice_1 = __importDefault(require("./HoraryPrice"));
const cardSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        enum: Package_1.default,
        required: true,
        default: Package_1.default.FREE,
    },
    proposedActivities: [Activity_1.default.schema],
    proposedServices: [Service_1.default.schema],
    proposedBookable: [Bookable_1.default.schema],
    studentReductionPrice: {
        type: Number,
        default: 20,
        min: 0,
    },
    subscriptionPrice: SubscriptionPrice_1.default.schema,
    horaryPrice: HoraryPrice_1.default.schema,
});
exports.default = mongoose_1.default.model("CardModel", cardSchema);
