import {Request, Response} from "express";
import horaryPriceService from "../services/HoraryPriceService";

const horaryPriceController = {
    getAll: (req :Request, res :Response) => { return horaryPriceService.getHorarysPrices(res)},
    getOne: (req :Request, res :Response) => { return horaryPriceService.getHoraryPrice(req, res) },
    create: (req :Request, res :Response) => { return horaryPriceService.createHoraryPrice(req, res)},
    update: (req :Request, res :Response) => { return horaryPriceService.updateHoraryPrice(req, res)},
    delete: (req :Request, res :Response) => { return horaryPriceService.deleteHoraryPrice(req, res)},
}

export default horaryPriceController;