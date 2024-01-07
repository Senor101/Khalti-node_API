import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import axios from "axios";

import prisma from "../../../../prisma/prisma.client";
import { Decimal } from "@prisma/client/runtime/library";
dotenv.config();

const verifyPayment =async (req:Request, res:Response, next:NextFunction) => {
    try{
        console.log("Inside verify payment");
        console.log(req.body);
        const {token,amount,product_identity, idx}:{token:string, amount: number | Decimal, product_identity: string, idx: string} = req.body;
        let config = {
            headers : {
                "Authorization" : `Key ${process.env.KHALTI_SECRET_KEY}`
            }
        }
        const resBody = await axios.post("https://khalti.com/api/v2/payment/verify/",{
            token: token,
            amount: amount
        }, config)
        console.log(resBody.data);

        // TODO : manage user
        let user : string =req.cookies.uid;
        await prisma.transaction.create({
            data:{
                amount : amount,
                userId:user,
                productsId: product_identity,
                khalti_transaction_id: idx
            }
        })
        return res.json({
            message:"Payment Successful"
        })
    }catch(error){
        next(error)
    }
}

const getAllTransactions = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const allTransactions = await prisma.transaction.findMany()
        return res.status(200).json({
            message: "All transactions fetched",
            data:allTransactions
        })
    }catch(error){
        next(error)
    }
}


const getTransactions = async (req:Request, res:Response, next:NextFunction) => {
    try{
        let user_id : string = req.cookies.uid;
        let allTransactions;
        const userDetails = await prisma.user.findUnique({
            where:{
                id:user_id
            }
        })
        if(!userDetails){
            return res.status(404).json({
                error:"User not authorized"
            })
        }
        if(userDetails.role === "ADMIN"){
            allTransactions = await prisma.transaction.findMany({
                include:{
                    product:true,
                    User:true
                },
            })
        }
        else{
            allTransactions = await prisma.transaction.findMany({
                where: {
                    userId : user_id,
                },
                include:{
                    product:true
                }
            })}
        return res.status(200).json({
            message: "All transactions fetched",
            data:allTransactions
        })
    }catch(error){
        next(error)
    }
}


export default {verifyPayment, getTransactions, getAllTransactions}