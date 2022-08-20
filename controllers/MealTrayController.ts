import {Request,Response} from "express";
import MealTrayService from "../services/MealTrayService";

const mealTrayController = {
    getAll: (req :Request, res :Response) => { return MealTrayService.getMealTrays(res)},
    getOneById: (req :Request, res :Response) => { return MealTrayService.getMealTrayById(req, res) },
    getOneByName : (req :Request, res :Response) => { return MealTrayService.getMealTrayByName(req, res) },
    create: (req :Request, res :Response) => { return MealTrayService.createMealTray(req, res)},
    updateById: (req :Request, res :Response) => { return MealTrayService.updateMealTrayById(req, res)},
    updateByName: (req :Request, res :Response) => { return MealTrayService.updateMealTrayByName(req, res)},
    delete: (req :Request, res :Response) => { return MealTrayService.deleteMealTray(req, res)},
}

export default mealTrayController;
