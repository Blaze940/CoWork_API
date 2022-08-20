import {Router} from "express";
import ServiceController from "../controllers/ServiceController";

const router = Router();

router.get('/', ServiceController.getAll);
router.get('/id/:id', ServiceController.getOne);
router.post('/', ServiceController.create);
router.put('/id/:id', ServiceController.update);
router.delete('/id/:id', ServiceController.delete);

export default router;