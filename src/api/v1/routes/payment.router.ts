import express from "express";

import paymentController from "../controllers/payment.controller"

const router = express.Router();

router.get("/",paymentController.getMerch);

router.post("/",paymentController.payToMerch);

router.post("/verify-payment",paymentController.verifyPayment)

export default router;