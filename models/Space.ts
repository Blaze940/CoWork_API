import mongoose from "mongoose";

const spaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    schedules : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'TimeSlotModel',
    }],
    hasMealTrayMember : {
        type: Boolean,
        default: false,
    },
    activities : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'ActivityModel',
    }],
    meals : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'MealTrayModel',
    }],
    services : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'ServiceModel',
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
    nbrFreeMeetingRoom : {
        type: Number,
        min: 0,
        default : 0,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for meetingRoom count'
        }
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
    nbrFreeCallingRoom : {
        type: Number,
        min: 0,
        default : 0,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for callingRoom count'
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
    nbrFreePrinter : {
        type: Number,
        min: 0,
        default : 0,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for printer count'
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
    nbrFreeLaptop : {
        type: Number,
        min: 0,
        default : 0,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for laptop count'
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
    nbrFreeLivingRoom : {
        type: Number,
        min: 0,
        default : 0,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value. Should be int for livingRoom count'
        }
    }

});

//SET DES VALEURS PAR DEFAULT AVANT SAUVEGARDE//

//if maxMeetingRoom is defined then nbrFreeMeetingRoom is set to maxMeetingRoom
spaceSchema.pre('save', function(next) {
    if (this.maxMeetingRoom) {
        this.nbrFreeMeetingRoom = this.maxMeetingRoom;
    }
    next(); //must be called
});

//if maxCallingRoom is defined then nbrFreeCallingRoom is set to maxCallingRoom
spaceSchema.pre('save', function(next) {
    if (this.maxCallingRoom) {
        this.nbrFreeCallingRoom = this.maxCallingRoom;
    }
    next(); //must be called
});

//if maxPrinter is defined then nbrFreePrinter is set to maxPrinter
spaceSchema.pre('save', function(next) {
    if (this.maxPrinter) {
        this.nbrFreePrinter = this.maxPrinter;
    }
    next(); //must be called
});

//if maxLaptop is defined then nbrFreeLaptop is set to maxLaptop
spaceSchema.pre('save', function(next) {
    if (this.maxLaptop) {
        this.nbrFreeLaptop = this.maxLaptop;
    }
    next(); //must be called
});

//if maxLivingRoom is defined then nbrFreeLivingRoom is set to maxLivingRoom
spaceSchema.pre('save', function(next) {
    if (this.maxLivingRoom) {
        this.nbrFreeLivingRoom = this.maxLivingRoom;
    }
    next(); //must be called
});

//if hasMealTrayMember is true then meals should be set
spaceSchema.pre('save', function(next) {
    if (this.hasMealTrayMember) {
        this.meals = [];
    }
    next(); //must be called
});
