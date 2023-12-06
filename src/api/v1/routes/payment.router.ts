import express from "express";

import paymentController from "../controllers/payment.controller"

const router = express.Router();

router.get("/",paymentController.getMerch);

router.post("/",paymentController.payToMerch);

export default router;