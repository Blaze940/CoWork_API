"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BookableEnum_1 = __importDefault(require("../enums/BookableEnum"));
const bookableSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        enum: BookableEnum_1.default,
        required: true,
        minLength: 2,
        maxLength: 50,
    },
    description: String,
    isReserved: {
        type: Boolean,
        default: false,
    },
    capacity: {
        type: Number,
        min: 0,
        default: 1,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value. Should be int for members count'
        }
    },
    bookedAt: Date,
    bookedBy: {
        type: String,
        uppercase: true,
    },
    returnedAt: Date
});
exports.default = mongoose_1.default.model("BookableModel", bookableSchema);
