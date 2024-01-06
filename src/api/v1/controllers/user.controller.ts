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
        // console.log(req.body)
        const {email, password, name,role}: {email:string, password: string, name:string,role:'USER' | 'ADMIN' | undefined} = req.body;
        const userExists = await prisma.user.findUnique({
            where : {
                email: email
            }
        });
        if (userExists) {
            return res.status(409).json({
                error: "User with the email already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                role: role
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
        const {email,password} : {email : string, password: string} = req.body;
        const userExists = await prisma.user.findUnique({
            where : {
                email: email
            }
        });
        if(!userExists) {
            return res.status(403).json({
                error: "Invalid email or password"
            })
        }
        const isPasswordValid = await bcrypt.compare(password,userExists.password)
        if(!isPasswordValid){
            return res.status(403).json({
                error: "Invalid email or password"
            })
        }
        res.cookie('uid', userExists.id, {
            path : '/',
            httpOnly : true,
            maxAge : 1000*60*60*24
        })
        res.cookie('isLoggedIn', true, {
            path : '/',
            maxAge : 1000*60*60*24
        })
        return res.status(200).json({
            message: "User logged in succesfully",
            data:userExists
        })
    }
    catch(error){
        console.log(error)
    }
}

const getUserId = async (req:Request, res:Response, next:NextFunction) => {
    try {
        return res.json({
            id:req.cookies.uid
        })
    }
    catch(error){
        console.log(error)
    }
}

const logoutUser = async (req:Request, res:Response, next:NextFunction) => {
    try {
        res.clearCookie('isLoggedIn');
        res.clearCookie('uid');
        res.status(200).json({
            message : "User logged Out succesfully."
        })
    }
    catch(error){
        console.log(error)
    }
}

export default {getUsers, registerUser, loginUser, getUserId, logoutUser}