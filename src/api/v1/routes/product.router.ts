import {Router} from "express"

import productController from "../controllers/product.controller";

const router = Router();

import {isAdmin,isAuthenticated} from "../middleware/auth.middleware"

router.get("/",isAuthenticated, productController.getProducts);

router.post("/", isAdmin, productController.postProducts);

export default router;