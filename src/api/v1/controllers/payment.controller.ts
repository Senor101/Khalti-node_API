import { Request, Response, NextFunction } from "express";
import request from "request";
import dotenv from "dotenv";
import axios from "axios";
import path from "path";
dotenv.config();

const verifyPayment =async (req:Request, res:Response, next:NextFunction) => {
    try{
        console.log("Inside verify payment");
        // console.log(req.body);
        const {token,amount}:{token:String, amount: Number} = req.body;
        let config = {
            headers : {
                "Authorization" : `Key ${process.env.KHALTI_SECRET_KEY}`
            }
        }
        const resBody = await axios.post("https://khalti.com/api/v2/payment/verify/",{
            "token": token,
            "amount": amount
        }, config)
        console.log(resBody.data);
        return res.json({
            message:"Payment Successful"
        })
    }catch(error){
        next(error)
    }
}

const getMerch = async (req:Request, res:Response, next: NextFunction) => {
    try{
        return res.sendFile(path.join(__dirname + "/../../../../views/payment.html"))
    }catch(error){
        next(error);
    }   
}

export default {getMerch,verifyPayment}