import {Router} from "express"

import userController from "../controllers/user.controller";

const router = Router();

router.get("/",userController.getUsers);

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser)

router.get("/getid",userController.getUserId);

export default router;