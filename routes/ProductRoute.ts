import {Router} from "express" ;
import ProductController from "../controllers/ProductController";

const router = Router();

router.get('/', ProductController.getAll);
router.get('/id/:id', ProductController.getOne);
router.post('/', ProductController.create);
router.put('/id/:id', ProductController.update);
router.delete('/id/:id', ProductController.delete);

export default router;