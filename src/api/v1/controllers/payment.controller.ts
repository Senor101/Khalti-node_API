import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import axios from "axios";
import prisma from "../../../../prisma/prisma.client";
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

const getTransactions = async (req:Request, res:Response, next:NextFunction) => {
    try{
        let user_id;
        const allTransactions = await prisma.transaction.findMany({
            where: {
                userId : user_id
            }
        })
        return res.status(200).json({
            message: "All transactions fetched",
            data:allTransactions
        })
    }catch(error){
        next(error)
    }
}


export default {verifyPayment, getTransactions}