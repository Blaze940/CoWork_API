import {Router} from 'express';
import RegistrationFormController from "../controllers/RegistrationController";

const router = Router() ;

router.get('/', RegistrationFormController.getAll);
router.get('/:id', RegistrationFormController.getOneById);
router.get('/:name', RegistrationFormController.getOneByName);
router.post('/', RegistrationFormController.create);
router.put('/:id', RegistrationFormController.updateById);
router.put('/:name', RegistrationFormController.updateByName);
router.delete('/:id', RegistrationFormController.delete);

export default router;