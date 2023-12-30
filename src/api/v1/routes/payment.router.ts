import express from "express";

import paymentController from "../controllers/payment.controller"

const router = express.Router();

router.post("/verify-payment",paymentController.verifyPayment)

router.get("/transactions", paymentController.getTransactions);

export default router;