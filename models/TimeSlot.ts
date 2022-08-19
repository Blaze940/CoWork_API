import mongoose from "mongoose";
import DaysEnum from "../enums/DaysEnum";
const timeSlotSchema = new mongoose.Schema({
    day : {
        type: String,
        enum: DaysEnum,
        required: true,
        minLength: 1,
        maxLength: 10
    },
    startTime: {
        type: Number,
        required: true,
        default : 8,
        min: 0,
        max: 24,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for startTime'
        }
    },
    endTime: {
        type: Number,
        required: true,
        default : 21,
        min: 0,
        max: 24,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for endTime'
        }
    }
});

// startTime < endTime
timeSlotSchema.pre("save", function(next) {
    if (this.startTime >= this.endTime) {
        next(new Error("startTime must be lower than endTime"));
    } else {
        next();
    }
});


export default mongoose.model("TimeSlotModel", timeSlotSchema);