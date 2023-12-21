import { Request, Response, NextFunction } from "express";
import prisma from "../../../../prisma/prisma.client";


const getProducts =async (req:Request, res:Response, next:NextFunction) => {
    try {

    }
    catch(error){
        console.log(error)
    }
}

const postProducts =async (req:Request, res:Response, next:NextFunction) => {
    try {

    }
    catch(error){
        console.log(error)
    }
}

export default {getProducts, postProducts}