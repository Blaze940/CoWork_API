"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const registrationFormSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        lowercase: true,
    },
    lastName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 60,
        uppercase: true,
    },
    adress: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 255
    },
    account: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'UserAccountModel',
        required: true,
    },
    isStudent: {
        type: Boolean,
        default: false,
    },
    card: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'CardModel',
        required: true,
    },
    dateSubscription: {
        type: Date,
        default: Date.now,
        required: true,
    },
    hasPaid: {
        type: Boolean,
        default: false,
        required: true,
    },
    //Tout ce qui suit appliqué uniquement si abonnement Payant
    dateLastPayment: {
        type: Date,
        default: Date.now,
        required: true,
    },
    dateEndSubscription: {
        type: Date,
        default: null,
        required: true,
    },
    dateRenewal: {
        type: Date,
        default: null,
        required: true,
    },
});
//create condition : if account.Role == "CLIENT" then isStudent and Card required
exports.default = mongoose_1.default.model("RegistrationFormModel", registrationFormSchema);
