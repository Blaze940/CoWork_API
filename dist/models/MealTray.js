"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mealTraySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
    },
    description: String,
    menu: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "ProductModel",
        }],
});
exports.default = mongoose_1.default.model("MealTrayModel", mealTraySchema);
