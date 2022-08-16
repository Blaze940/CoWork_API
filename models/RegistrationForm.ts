import mongoose from "mongoose";

const registrationFormSchema = new mongoose.Schema({
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
        uppercase : true,
    },
    adress: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 255
    },
    account : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserAccountModel',
        required: true,
    },
    isStudent : {
        type: Boolean,
        default: false,
    },
    card : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'CardModel',
        required: true,
    },
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
        default: Date.now,
        required: true,
    },
    dateRenewal: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

//create condition : if account.Role == "CLIENT" then isStudent and Card required

export default mongoose.model("RegistrationFormModel", registrationFormSchema);

