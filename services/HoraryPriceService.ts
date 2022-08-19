import {Request, Response}  from "express";
import Horaryprice from "../models/HoraryPrice";

const horaryPriceService = {
    getHorarysPrices: async (res: Response) => {
        try {
            const horaryPrices = await Horaryprice.find();
            return res.status(200).json(horaryPrices);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getHoraryPrice: async (req: Request, res: Response) => {
        try {
            const horaryPrice = await Horaryprice.findById(req.params.id);
            if (!horaryPrice) {
                return res.status(404).json({ message: "HoraryPrice not found" });
            }
            return res.status(200).json(horaryPrice);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createHoraryPrice: async (req: Request, res: Response) => {
        try {
            const horaryPrice = await Horaryprice.create(req.body);
            return res.status(201).json(horaryPrice);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateHoraryPrice: async (req: Request, res: Response) => {
        try {
            const horaryPrice = await Horaryprice.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            return res.status(200).json(horaryPrice);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteHoraryPrice: async (req: Request, res: Response) => {
        try {
            await Horaryprice.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "HoraryPrice with ID : "+ req.params.id + " has been deleted" });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
};

export default horaryPriceService;