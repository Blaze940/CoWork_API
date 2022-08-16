import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 20
    },
    description: {
        type: String,
    },
});

export default mongoose.model("ServiceModel", serviceSchema);