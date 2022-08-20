"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAccountSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserRole_1 = __importDefault(require("../enums/UserRole"));
const Bookable_1 = __importDefault(require("./Bookable"));
const Activity_1 = __importDefault(require("./Activity"));
const MealTray_1 = __importDefault(require("./MealTray"));
exports.userAccountSchema = new mongoose_1.default.Schema({
    surname: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 255,
        unique: true
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
        maxLength: 1024,
    },
    role: {
        type: UserRole_1.default,
        default: UserRole_1.default.CLIENT,
        required: true,
    },
    reservations: [Bookable_1.default.schema, MealTray_1.default.schema],
    participations: [Activity_1.default.schema]
});
exports.default = mongoose_1.default.model("UserAccountModel", exports.userAccountSchema);
