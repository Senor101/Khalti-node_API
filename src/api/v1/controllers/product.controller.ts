import { Request, Response, NextFunction } from "express";
import prisma from "../../../../prisma/prisma.client";
import { Decimal } from "@prisma/client/runtime/library";


const getProducts =async (req:Request, res:Response, next:NextFunction) => {
    try {
        const allProducts = await prisma.products.findMany();
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

const postProducts =async (req:Request, res:Response, next:NextFunction) => {
    try {
        const {name, price} : {name: string, price: Decimal}= req.body;
        const newProduct = await prisma.products.create({
            data: {
                name : name,
                price: price
            }
        })
        res.status(201).json({
            message:"New product created succesfully",
            status:"ok",
            data:newProduct
        })
    }
    catch(error){
        console.log(error)
    }
}

export default {getProducts, postProducts}