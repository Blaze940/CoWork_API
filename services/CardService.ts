import {Request,Response} from "express";
import Card from "../models/Card";

const cardService = {
    getCards: async (res: Response) => {
        try {
            const cards = await Card.find();
            return res.status(200).json(cards);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getCardById: async (req: Request, res: Response) => {
        try {
            const card = await Card.findById(req.params.id);
            if (!card) {
                return res.status(404).json({ message: "Card not found" });}
            return res.status(200).json(card);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getCardByName : async (req: Request, res: Response) => {
        try {
            const card = await Card.find({name: req.params.name});
            if (!card) {
                return res.status(404).json({ message: "Card with name : "+req.params.name+" not found" });
            }
            return res.status(200).json(card);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createCard: async (req: Request, res: Response) => {
        try {
            const card = await Card.create(req.body);
            return res.status(201).json(card);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateCardById: async (req: Request, res: Response) => {
        try {
            const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            return res.status(200).json(card);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateCardByName: async (req: Request, res: Response) => {
        try {
            const card = await Card.findOneAndUpdate({name: req.params.name}, req.body, {
                new: true,
            });
            return res.status(200).json(card);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteCard: async (req: Request, res: Response) => {
        try {
            const card = await Card.findByIdAndDelete(req.params.id);
            return res.status(200).json({message : "Card with id : "+req.params.id+" deleted. List of cards : "+card});
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};

export default cardService;