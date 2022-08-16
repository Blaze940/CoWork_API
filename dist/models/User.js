"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserRole_1 = __importDefault(require("../enums/UserRole"));
exports.userSchema = new mongoose_1.default.Schema({
    surname: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 255,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minLength: 2,
        maxLength: 255,
    },
    password: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 255,
    },
    role: {
        type: UserRole_1.default,
        default: UserRole_1.default.CLIENT,
        required: true,
    },
});
exports.default = mongoose_1.default.model("UserModel", exports.userSchema);
