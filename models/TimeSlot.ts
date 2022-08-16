import mongoose from "mongoose";

const timeSlotSchema = new mongoose.Schema({
    /*belongsTo: {
        type: mongoose.Schema.Types.ObjectId,
        //ref : "SpaceModel"
        ref: "SubscriptionPrice",
        required: true
    },*/
    day : {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 10
    },
    startTime: {
        type: Number,
        required: true,
        default : 8,
        min: 0,
        max: 24
    },
    endTime: {
        type: Number,
        required: true,
        default : 21,
        min: 0,
        max: 24,
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