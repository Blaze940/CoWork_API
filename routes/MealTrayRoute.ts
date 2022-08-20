import {Router} from "express";
import mealTrayController from "../controllers/MealTrayController";

const router = Router();

router.get('/', mealTrayController.getAll);
router.get('/id/:id', mealTrayController.getOneById);
router.get('/name/:name', mealTrayController.getOneByName);
router.post('/', mealTrayController.create);
router.put('/id/:id', mealTrayController.updateById);
router.put('/name/:name', mealTrayController.updateByName);
router.delete('/id/:id', mealTrayController.delete);

export default router;