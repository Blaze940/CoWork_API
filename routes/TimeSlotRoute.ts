import {Router} from "express";
import TimeSlotController from "../controllers/TimeSlotController";

const router = Router();

router.get('/', TimeSlotController.getAll);
router.get('/id/:id', TimeSlotController.getOne);
router.post('/', TimeSlotController.create);
router.put('/id/:id', TimeSlotController.update);
router.delete('/id/:id', TimeSlotController.delete);

export default router;