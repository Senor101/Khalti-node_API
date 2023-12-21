import {Router} from "express"

import productController from "../controllers/product.controller";

const router = Router();

router.get("/", productController.getProducts);

router.post("/", productController.postProducts);

export default router;