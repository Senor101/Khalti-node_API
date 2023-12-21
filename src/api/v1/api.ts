import express,{Request,Response} from "express";

import paymentRouter from "./routes/payment.router"
import productRouter from "./routes/product.router"

const router = express.Router();

router.get("/",(req:Request ,res:Response) => {
    res.send("<h1 align=center>This is the homepage for NODE-KHALTI API.</h1>")
})

router.use("/payment",paymentRouter)

router.use("/products", productRouter)

export default router;