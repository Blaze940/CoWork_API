import {Router} from "express" ;
import subscriptionPriceController from "../controllers/SubscriptionPriceController";

const router = Router();

router.get('/', subscriptionPriceController.getAll);
router.get('/id/:id', subscriptionPriceController.getOne);
router.post('/', subscriptionPriceController.create);
router.put('/id/:id', subscriptionPriceController.update);
router.delete('/id/:id', subscriptionPriceController.delete);

export default router;