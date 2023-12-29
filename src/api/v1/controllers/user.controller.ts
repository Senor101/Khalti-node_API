import { Request, Response, NextFunction } from "express";
import prisma from "../../../../prisma/prisma.client";


const getUsers =async (req:Request, res:Response, next:NextFunction) => {
    try {
        const allProducts = await prisma.user.findMany();
        res.status(200).json({
            message:"All products fetched succesfully",
            status: "ok",
            data: allProducts
        })
    }
    catch(error){
        console.log(error)
    }
}


const registerUser =async (req:Request, res:Response, next:NextFunction) => {
    try {
    }
    catch(error){
        console.log(error)
    }
}


const loginUser =async (req:Request, res:Response, next:NextFunction) => {
    try {
    }
    catch(error){
        console.log(error)
    }
}


export default {getUsers, registerUser, loginUser}