console.log("\nIndex is beeing read") ;

import express, {Response, Request} from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import HoraryPriceRouter from './routes/HoraryPriceRoute';
import ActivityRouter from "./routes/ActivityRoute";
import ProductRouter from "./routes/ProductRoute";
import SubscriptionPriceRouter from "./routes/SubscriptionPriceRoute";
import TimeSlotRouter from "./routes/TimeSlotRoute";
import ServiceRouter from "./routes/ServiceRoute";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://blaze940:5DPXG1oeNMo2yvf1@cluster0.e93id.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
const app = express();

//use cors middleware to allow cross-origin resource sharing
app.use(cors());

//Retrieve the body of the request
app.use(express.json());

//////////////////////////////////////////////////////////////////////////////////////////////

//First route test
app.use("/test123", (req: Request, res: Response) => {
    console.log("\nFirst Route succeed");
    res.send("API sucessfully launched");
});

//Use des routes de bases
app.use("/API/horaryPrice", HoraryPriceRouter);
app.use("/API/activity", ActivityRouter);
app.use("/API/product", ProductRouter);
app.use("/API/subscriptionPrice", SubscriptionPriceRouter);
app.use("/API/timeSlot", TimeSlotRouter);
app.use("/API/service", ServiceRouter);



//Connexion MongoDb
mongoose.connect(MONGO_URL,{})
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log('Server listening on port ' + PORT);
        });
    }).catch(() => {
        throw new Error('Couldn\'t connect to the server')
    });