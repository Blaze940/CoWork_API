import mongoose from "mongoose";
import ServiceEnum from "../enums/ServiceEnum";

const serviceSchema = new mongoose.Schema({
    name: {
        type : ServiceEnum,
        required : true,
        minLength: 2,
        maxLength: 20
    },
    description: {
        type: String,
        minLength: 5,
        maxLength: 255
    },
});

export default mongoose.model("ServiceModel", serviceSchema);