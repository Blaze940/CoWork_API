import {Request, Response} from "express";
import MealTray from "../models/MealTray";

const mealTrayService = {
    getMealTrays: async (res: Response) => {
        try {
            const mealTrays = await MealTray.find();
            return res.status(200).json(mealTrays);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getMealTrayById: async (req: Request, res: Response) => {
        try {
            const mealTray = await MealTray.findById(req.params.id);
            if (!mealTray) {
                return res.status(404).json({ message: "MealTray not found" });}
            return res.status(200).json(mealTray);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getMealTrayByName : async (req: Request, res: Response) => {
        try {
            const mealTray = await MealTray.find({name: req.params.name});
            if (!mealTray) {
                return res.status(404).json({ message: "MealTray with name : "+req.params.name+" not found" });
            }
            return res.status(200).json(mealTray);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createMealTray: async (req: Request, res: Response) => {
        try {
            const mealTray = await MealTray.create(req.body);
            return res.status(201).json(mealTray);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateMealTrayById: async (req: Request, res: Response) => {
        try {
            const mealTray = await MealTray.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            return res.status(200).json(mealTray);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateMealTrayByName: async (req: Request, res: Response) => {
        try {
            const mealTray = await MealTray.findOneAndUpdate({name: req.params.name}, req.body, {
                new: true,
            });
            return res.status(200).json(mealTray);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteMealTray: async (req: Request, res: Response) => {
        try {
            await MealTray.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "MealTray with ID : "+ req.params.id + " has been deleted" });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default mealTrayService;