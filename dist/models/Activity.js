"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const activitySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    maxClient: {
        type: Number,
        default: 20,
        min: 0,
        max: 50,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    listOfParticipants: [String]
});
//size listofparticpants shouldn't be greater than maxClient
activitySchema.pre('save', function (next) {
    if (this.listOfParticipants.length > this.maxClient) {
        next(new Error('listOfParticipants size should be less than maxClient'));
    }
    next();
});
exports.default = mongoose_1.default.model("ActivityModel", activitySchema);
