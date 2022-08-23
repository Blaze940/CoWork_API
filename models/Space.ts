import mongoose from "mongoose";
import ServiceEnum from "../enums/ServiceEnum";
import SpaceEnum from "../enums/SpaceEnum";

const spaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum : SpaceEnum,
        minLength: 2,
        maxLength: 100,
    },
    localisation: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255,
    },
    users : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'UserAccountModel',
    }],
    schedule : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'TimeSlotModel',
    }],
    activities : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'ActivityModel',
    }],
    meals : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'MealTrayModel',
    }],
    services : [{
        type : String,
        enum : ServiceEnum,
    }],
    bookables : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'BookableModel',
    }],
    maxMeetingRoom : {
        type: Number,
        min: 0,
        default : 0,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for maxMeetingRoom '
        },
    },
    maxCallingRoom : {
        type: Number,
        min: 0,
        default : 0,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for maxCallingRoom '
        }
    },
    maxPrinter : {
        type: Number,
        min: 0,
        default : 0,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for maxPrinter '
        }
    },
    maxLaptop : {
        type: Number,
        min: 0,
        default : 0,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for maxLaptop '
        }
    },
    maxLivingRoom : {
        type: Number,
        min: 0,
        default : 0,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for maxLivingRoom '
        }
    },

});

export default mongoose.model("SpaceModel", spaceSchema);