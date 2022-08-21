import {Router} from 'express';
import UserAccountController from "../controllers/UserAccountController";

const router = Router();

router.get('/', UserAccountController.getAll);
router.get('/:id', UserAccountController.getOneById);
router.get('/:name', UserAccountController.getOneByName);
router.post('/', UserAccountController.create);
router.put('/:id', UserAccountController.updateById);
router.put('/:name', UserAccountController.updateByName);
router.delete('/:id', UserAccountController.delete);

export default router;