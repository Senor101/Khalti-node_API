import express, {Express, NextFunction, Request, Response} from "express";
import cors from "cors";
import apiRouterv1 from "./api/v1/api";
import path from "path";

const app:Express = express();


app.use(cors());
app.use(express.static('views'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// API routes
app.use("/api/v1",apiRouterv1);


// Frontend Routes
app.get("/products", (req:Request, res:Response, next: NextFunction) => {
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


export default app;