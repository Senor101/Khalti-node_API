import {Router} from "express"

import userController from "../controllers/user.controller";

const router = Router();
import {isAdmin,isAuthenticated} from "../middleware/auth.middleware"

router.get("/",isAdmin, userController.getUsers);

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser)

router.get("/getid",userController.getUserId);

router.post("/logout", isAuthenticated, userController.logoutUser);

export default router;