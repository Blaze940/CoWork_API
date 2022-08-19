import {Request,Response} from "express";
import SubscriptionPrice from "../models/SubscriptionPrice";

const subscriptionPriceService = {
    getSubscriptionPrices: async (res: Response) => {
        try {
            const subscriptionPrices = await SubscriptionPrice.find();
            return res.status(200).json(subscriptionPrices);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getSubscriptionPrice: async (req: Request, res: Response) => {
        try {
            const subscriptionPrice = await SubscriptionPrice.findById(req.params.id);
            if (!subscriptionPrice) {
                return res.status(404).json({ message: "SubscriptionPrice not found" });
            }
            return res.status(200).json(subscriptionPrice);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createSubscriptionPrice: async (req: Request, res: Response) => {
        try {
            const subscriptionPrice = await SubscriptionPrice.create(req.body);
            return res.status(201).json(subscriptionPrice);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateSubscriptionPrice: async (req: Request, res: Response) => {
        try {
            const subscriptionPrice = await SubscriptionPrice.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            return res.status(200).json(subscriptionPrice);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteSubscriptionPrice: async (req: Request, res: Response) => {
        try {
            await SubscriptionPrice.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "SubscriptionPrice with ID : "+ req.params.id + " has been deleted" });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};

export default subscriptionPriceService;
