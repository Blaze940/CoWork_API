import {Router} from "express";
import activityController from "../controllers/ActivityController";

const router = Router();

router.get('/', activityController.getAll);
router.get('/:id', activityController.getOne);
router.post('/', activityController.create);
router.put('/:id', activityController.update);
router.delete('/:id', activityController.delete);

export default router;