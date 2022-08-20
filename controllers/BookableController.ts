import {Request,Response} from "express";
import BookableService from "../services/BookableService";

const bookableController = {
    getAll: (req :Request, res :Response) => { return BookableService.getBookables(res)},
    getOneById: (req :Request, res :Response) => { return BookableService.getBookableById(req, res) },
    getOneByName : (req :Request, res :Response) => { return BookableService.getBookableByName(req, res) },
    create: (req :Request, res :Response) => { return BookableService.createBookable(req, res)},
    updateById: (req :Request, res :Response) => { return BookableService.updateBookableById(req, res)},
    updateByName: (req :Request, res :Response) => { return BookableService.updateBookableByName(req, res)},
    delete: (req :Request, res :Response) => { return BookableService.deleteBookable(req, res)},
}

export default bookableController;