import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique : true,
        },
    description: {
        type: String,
        required: true,
    },
    nbrOfParticipants: {
        type: Number,
        required: true,
        min: 0,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for members count'
        }
    },
    maxClient: {
        type: Number,
        default : 20,
        min: 0,
        max: 50,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    }
});

export default mongoose.model("ActivityModel", activitySchema);


