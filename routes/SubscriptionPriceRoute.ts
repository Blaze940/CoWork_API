import {Router} from "express" ;
import subscriptionPriceController from "../controllers/SubscriptionPriceController";

const router = Router();

router.get('/', subscriptionPriceController.getAll);
router.get('/:id', subscriptionPriceController.getOne);
router.post('/', subscriptionPriceController.create);
router.put('/:id', subscriptionPriceController.update);
router.delete('/:id', subscriptionPriceController.delete);

export default router;