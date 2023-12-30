import { Request, Response, NextFunction } from "express";
import prisma from "../../../../prisma/prisma.client";
import bcrypt, { hash } from "bcrypt";

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
        const {email, password, name}: {email:string, password: string, name:string} = req.body;
        const userExists = await prisma.user.findUnique({
            where : {
                email: email
            }
        });
        // if(userExists) {
        //     return throwError("User with email already exists", 409)
        // }
        const hashedPassword = await bcrypt.hash(password,12);
        const newUser = await prisma.user.create({
            data:{
                name: name,
                email : email,
                password : hashedPassword
            }
        });
        return res.status(201).json({
            message: "User registered succesfully",
            data: newUser
        })
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