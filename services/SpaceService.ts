import {Request, Response} from "express";
import Space from "../models/Space";

const spaceService = {
    getSpaces: async (res: Response) => {
        try {
            const spaces = await Space.find();
            return res.status(200).json(spaces);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getSpaceById: async (req: Request, res: Response) => {
        try {
            const space = await Space.findById(req.params.id);
            if (!space) {
                return res.status(404).json({ message: "Space not found" });}
            return res.status(200).json(space);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getSpaceByName : async (req: Request, res: Response) => {
        try {
            const space = await Space.find({name: req.params.name});
            if (!space) {
                return res.status(404).json({ message: "Space with name : "+req.params.name+" not found" });
            }
            return res.status(200).json(space);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createSpace: async (req: Request, res: Response) => {
        try {
            const space = await Space.create(req.body);
            return res.status(201).json(space);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateSpaceById: async (req: Request, res: Response) => {
        try {
            const space = await Space.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            return res.status(200).json(space);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateSpaceByName: async (req: Request, res: Response) => {
        try {
            const space = await Space.findOneAndUpdate({name: req.params.name}, req.body, {
                new: true,
            });
            return res.status(200).json(space);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteSpace: async (req : Request, res: Response) => {
        try {
            const space = await Space.findByIdAndDelete(req.params.id);
            return res.status(200).json(space);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default spaceService;