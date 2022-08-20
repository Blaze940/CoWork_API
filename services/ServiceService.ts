import {Request,Response} from "express";
import Service from "../models/Service";

const serviceService = {
    getServices: async (res: Response) => {
        try {
            const services = await Service.find();
            return res.status(200).json(services);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getService: async (req: Request, res: Response) => {
        try {
            const service = await Service.findById(req.params.id);
            if (!service) {
                return res.status(404).json({ message: "Service not found" });
            }
            return res.status(200).json(service);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createService: async (req: Request, res: Response) => {
        try {
            const service = await Service.create(req.body);
            return res.status(201).json(service);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateService: async (req: Request, res: Response) => {
        try {
            const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            return res.status(200).json(service);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteService: async (req: Request, res: Response) => {
        try {
            await Service.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "Service with ID : "+ req.params.id + " has been deleted" });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default serviceService;