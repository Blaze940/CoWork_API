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
    maxClient: {
        type: Number,
        default : 20,
        min: 0,
        max: 50,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    listOfParticipants: [String]
});

//size listofparticpants shouldn't be greater than maxClient
activitySchema.pre('save', function(next) {
    if (this.listOfParticipants.length > this.maxClient) {
        next(new Error('listOfParticipants size should be less than maxClient'));
    }
    next();
});

export default mongoose.model("ActivityModel", activitySchema);


