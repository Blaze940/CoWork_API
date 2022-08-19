import {Request,Response} from "express";
import subscriptionPriceService from "../services/SubscriptionPriceService";

const subscriptionPriceController = {
    getAll: (req :Request, res :Response) => { return subscriptionPriceService.getSubscriptionPrices(res)},
    getOne: (req :Request, res :Response) => { return subscriptionPriceService.getSubscriptionPrice(req, res) },
    create: (req :Request, res :Response) => { return subscriptionPriceService.createSubscriptionPrice(req, res)},
    update: (req :Request, res :Response) => { return subscriptionPriceService.updateSubscriptionPrice(req, res)},
    delete: (req :Request, res :Response) => { return subscriptionPriceService.deleteSubscriptionPrice(req, res)},
}

export default subscriptionPriceController;