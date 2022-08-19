"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("\nIndex is beeing read");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const HoraryPriceRoute_1 = __importDefault(require("./routes/HoraryPriceRoute"));
const ActivityRoute_1 = __importDefault(require("./routes/ActivityRoute"));
const ProductRoute_1 = __importDefault(require("./routes/ProductRoute"));
dotenv_1.default.config();
const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://blaze940:5DPXG1oeNMo2yvf1@cluster0.e93id.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
//use cors middleware to allow cross-origin resource sharing
app.use((0, cors_1.default)());
//Retrieve the body of the request
app.use(express_1.default.json());
//////////////////////////////////////////////////////////////////////////////////////////////
//First route test
app.use("/test123", (req, res) => {
    console.log("\nFirst Route succeed");
    res.send("API sucessfully launched");
});
//TEST ROUTE FOR HORARY PRICE
app.use("/API/horaryPrice", HoraryPriceRoute_1.default);
app.use("/API/activity", ActivityRoute_1.default);
app.use("/API/product", ProductRoute_1.default);
//Connexion MongoDb
mongoose_1.default.connect(MONGO_URL, {})
    .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log('Server listening on port ' + PORT);
    });
}).catch(() => {
    throw new Error('Couldn\'t connect to the server');
});
