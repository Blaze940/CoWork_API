import {Router} from 'express';
import UserAccountController from "../controllers/UserAccountController";

const router = Router();

router.get('/', UserAccountController.getAll);
router.get('/id/:id', UserAccountController.getOneById);
router.get('/pseudo/:pseudo', UserAccountController.getOneByName);
router.post('/', UserAccountController.create);
router.put('/id/:id', UserAccountController.updateById);
router.put('/pseudo/:pseudo', UserAccountController.updateByName);
router.delete('/:id', UserAccountController.delete);

export default router;