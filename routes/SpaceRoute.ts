import {Router} from 'express';
import SpaceController from "../controllers/SpaceController";

const router = Router();

router.get('/', SpaceController.getAll);
router.get('/:id', SpaceController.getOneById);
router.get('/:name', SpaceController.getOneByName);
router.post('/', SpaceController.create);
router.put('/:id', SpaceController.updateById);
router.put('/:name', SpaceController.updateByName);
router.delete('/:id', SpaceController.delete);

export default router;

