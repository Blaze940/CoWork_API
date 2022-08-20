import {Request, Response} from "express";
import Bookable from "../models/Bookable";
import BookableEnum from "../enums/BookableEnum";

const bookableService = {
    getBookables: async (res: Response) => {
        try {
            const bookables = await Bookable.find();
            return res.status(200).json(bookables);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getBookableById: async (req: Request, res: Response) => {
        try {
            const bookable = await Bookable.findById(req.params.id);
            if (!bookable) {
                return res.status(404).json({ message: "Bookable not found" });}
            return res.status(200).json(bookable);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getBookableByName : async (req: Request, res: Response) => {
        try {
            const bookable = await Bookable.find({name: req.params.name});
            if (!bookable) {
                return res.status(404).json({ message: "Bookable with name : "+req.params.name+" not found" });
            }
            return res.status(200).json(bookable);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createBookable: async (req: Request, res: Response) => {
        try {
            const bookable = await Bookable.create(req.body);
            return res.status(201).json(bookable);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateBookableById: async (req: Request, res: Response) => {
        try {
            const bookable = await Bookable.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            return res.status(200).json(bookable);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateBookableByName: async (req: Request, res: Response) => {
        try {
            const bookable = await Bookable.findOneAndUpdate({name: req.params.name}, req.body, {
                new: true,
            });
            return res.status(200).json(bookable);
        } catch (error) {
            return res.status(500).json(error);
            }
        },
    deleteBookable: async (req: Request, res: Response) => {
        try {
            const bookable = await Bookable.findByIdAndDelete(req.params.id);
            return res.status(200).json({message: "Bookable with ID : "+ req.params.id + " has been deleted. Last look up ------>"+bookable});
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default bookableService;