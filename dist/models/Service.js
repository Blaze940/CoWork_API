"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ServiceEnum_1 = __importDefault(require("../enums/ServiceEnum"));
const serviceSchema = new mongoose_1.default.Schema({
    name: {
        type: ServiceEnum_1.default,
        required: true,
        minLength: 2,
        maxLength: 20
    },
    description: {
        type: String,
        minLength: 5,
        maxLength: 255
    },
});
exports.default = mongoose_1.default.model("ServiceModel", serviceSchema);
