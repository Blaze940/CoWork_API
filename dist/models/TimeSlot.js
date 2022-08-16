"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const timeSlotSchema = new mongoose_1.default.Schema({
    /*belongsTo: {
        type: mongoose.Schema.Types.ObjectId,
        //ref : "SpaceModel"
        ref: "SubscriptionPrice",
        required: true
    },*/
    day: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 10
    },
    startTime: {
        type: Number,
        required: true,
        default: 8,
        min: 0,
        max: 24
    },
    endTime: {
        type: Number,
        required: true,
        default: 21,
        min: 0,
        max: 24,
    }
});
// startTime < endTime
timeSlotSchema.pre("save", function (next) {
    if (this.startTime >= this.endTime) {
        next(new Error("startTime must be lower than endTime"));
    }
    else {
        next();
    }
});
exports.default = mongoose_1.default.model("TimeSlotModel", timeSlotSchema);
