import {Request,Response} from "express";
import serviceService from "../models/ServiceService";

const serviceController = {
    getAll: (req :Request, res :Response) => { return serviceService.getServices(res)},
    getOne: (req :Request, res :Response) => { return serviceService.getService(req, res) },
    create: (req :Request, res :Response) => { return serviceService.createService(req, res)},
    update: (req :Request, res :Response) => { return serviceService.updateService(req, res)},
    delete: (req :Request, res :Response) => { return serviceService.deleteService(req, res)}
}

export default serviceController;