import express, {Express, NextFunction, Request, Response} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import apiRouterv1 from "./api/v1/api";
import CustomErrorHandler from "./api/v1/middleware/errohandler.middleware"
import path from "path";

const app:Express = express();

interface User {
    id : string
}

declare global {
    namespace Express { 
        interface Request {
            user? : User
        }
    }
}


app.use(cors());
app.use(express.static('views'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());

// API routes
app.use("/api/v1",apiRouterv1);
app.use(CustomErrorHandler);


// Frontend Routes
app.get(["/","/products"], (req:Request, res:Response, next: NextFunction) => {
    try{
        return res.sendFile(path.join(__dirname,"/../views/products.html"))
    }catch(error){
        next(error)
    }
})

app.get("/payment", (req:Request, res:Response, next: NextFunction) => {
    try{
        return res.sendFile(path.join(__dirname,"/../views/payment.html"))
    }catch(error){
        next(error)
    }
})

app.get("/register", (req:Request, res:Response, next: NextFunction) => {
    try{
        return res.sendFile(path.join(__dirname,"/../views/register.html"))
    }catch(error){
        next(error)
    }
})

app.get("/login", (req:Request, res:Response, next: NextFunction) => {
    try{
        return res.sendFile(path.join(__dirname,"/../views/login.html"))
    }catch(error){
        next(error)
    }
})

app.get("/transactions", (req:Request, res:Response, next: NextFunction) => {
    try{
        return res.sendFile(path.join(__dirname,"/../views/transactions.html"))
    }catch(error){
        next(error)
    }
})

app.get("/transactions/all", (req:Request, res:Response, next: NextFunction) => {
    try{
        return res.sendFile(path.join(__dirname,"/../views/alltransaction.html"))
    }catch(error){
        next(error)
    }
})



export default app;