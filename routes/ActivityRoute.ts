import {Router} from "express";
import activityController from "../controllers/ActivityController";

const router = Router();

router.get('/', activityController.getAll);
router.get('/id/:id', activityController.getOne);
router.post('/', activityController.create);
router.put('/id/:id', activityController.update);
router.delete('/id/:id', activityController.delete);

export default router;