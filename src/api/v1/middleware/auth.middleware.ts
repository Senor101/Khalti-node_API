import { Request, Response, NextFunction } from 'express';
import prisma from "../../../../prisma/prisma.client";
import userExists from "../utils/helperFunctions.utils"

const isAuthenticated  = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let user_id: string = req.cookies.uid;
        if(!user_id){
            return res.status(401).json({
                error: "User not logged in"
            })
        }
        if(!userExists(user_id)){
            return res.status(404).json({
                error: "User not found"
            })
        }
        next();
    } catch (error) {
        next(error)
    }
}

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try{
        let user_id : string = req.cookies.uid;
        if(!user_id){
            return res.status(401).json({
                error: "User not logged in"
            })
        }
        const userDetail = await prisma.user.findUnique({
            where:{
                id:user_id
            }
        })
        if(!userDetail){
            return res.status(404).json({
                error: "User not found"
            })
        }
        if(userDetail.role === 'USER'){
            return res.status(403).json({
                error: "Not accesible to user."
            })
        }
        next();
    }catch(error){
        next(error)
    }  
}

export  {isAdmin, isAuthenticated}