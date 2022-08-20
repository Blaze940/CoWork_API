import {Router} from "express";
import CardController from "../controllers/CardController";

const router = Router();

router.get('/', CardController.getAll);
router.get('/id/:id', CardController.getOneById);
router.get('/name/:name', CardController.getOneByName);
router.post('/', CardController.create);
router.put('/id/:id', CardController.updateById);
router.put('/name/:name', CardController.updateByName);
router.delete('/id/:id', CardController.delete);

export default router;

