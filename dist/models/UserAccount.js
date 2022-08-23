"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAccountSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserRole_1 = __importDefault(require("../enums/UserRole"));
const Registration_1 = __importDefault(require("./Registration"));
exports.userAccountSchema = new mongoose_1.default.Schema({
    pseudo: {
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
        type: String,
        enum: UserRole_1.default,
        default: UserRole_1.default.CLIENT,
    },
    mealTray: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'MealTrayModel',
    },
    booked: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'BookableModel'
        }],
    participations: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'ActivityModel'
        }],
    registerForm: Registration_1.default.schema
});
exports.default = mongoose_1.default.model("UserAccountModel", exports.userAccountSchema);
