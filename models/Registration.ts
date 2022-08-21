import mongoose from "mongoose";
import Card from "./Card";

const registrationFormSchema = new mongoose.Schema({
    surname: {
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
        uppercase : true,
    },
    address: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 255
    },
    isStudent : {
        type: Boolean,
        default: false,
    },
    card : Card.schema,
    dateSubscription : {
        type: Date,
        default: Date.now,
        required: true,
    },
    hasPaid : {
        type: Boolean,
        default: false,
        required: true,
    },
    //Tout ce qui suit appliqué uniquement si abonnement Payant
    dateLastPayment : {
        type: Date,
        default: Date.now,
        required: true,
    },
    dateEndSubscription : {
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

export default mongoose.model("RegistrationFormModel", registrationFormSchema);

