import {Router} from "express";
import TimeSlotController from "../controllers/TimeSlotController";

const router = Router();

router.get('/', TimeSlotController.getAll);
router.get('/:id', TimeSlotController.getOne);
router.post('/', TimeSlotController.create);
router.put('/:id', TimeSlotController.update);
router.delete('/:id', TimeSlotController.delete);

export default router;