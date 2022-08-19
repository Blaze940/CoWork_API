"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DaysEnum_1 = __importDefault(require("../enums/DaysEnum"));
const timeSlotSchema = new mongoose_1.default.Schema({
    day: {
        type: String,
        enum: DaysEnum_1.default,
        required: true,
        minLength: 1,
        maxLength: 10
    },
    startTime: {
        type: Number,
        required: true,
        default: 8,
        min: 0,
        max: 24,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value. Should be int for startTime'
        }
    },
    endTime: {
        type: Number,
        required: true,
        default: 21,
        min: 0,
        max: 24,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value. Should be int for endTime'
        }
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
