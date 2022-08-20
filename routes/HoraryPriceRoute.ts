import {Router} from "express";
import horaryPriceController from "../controllers/HoraryPriceController";

const router = Router();

router.get('/', horaryPriceController.getAll);
router.get('/id/:id', horaryPriceController.getOne);
router.post('/', horaryPriceController.create);
router.put('/id/:id', horaryPriceController.update);
router.delete('/id/:id', horaryPriceController.delete);

export default router;
