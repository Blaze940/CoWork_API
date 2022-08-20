import {Router} from "express";
import BookableController from "../controllers/BookableController";

const router = Router();

router.get('/', BookableController.getAll);
router.get('/id/:id', BookableController.getOneById);
router.get('/name/:name', BookableController.getOneByName);
router.post('/', BookableController.create);
router.put('/id/:id', BookableController.updateById);
router.put('/name/:name', BookableController.updateByName);
router.delete('/id/:id', BookableController.delete);

export default router;