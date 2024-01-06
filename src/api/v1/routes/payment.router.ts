import express from "express";

import paymentController from "../controllers/payment.controller"

const router = express.Router();

import {isAdmin,isAuthenticated} from "../middleware/auth.middleware"

router.post("/verify-payment",isAuthenticated, paymentController.verifyPayment)

router.get("/transactions",isAuthenticated, paymentController.getTransactions);

// router.get("/transactions/all",)

export default router;