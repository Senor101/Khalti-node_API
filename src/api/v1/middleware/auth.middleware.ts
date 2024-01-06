import { Request, Response, NextFunction } from 'express';
import prisma from "../../../../prisma/prisma.client";

const isAuthenticated  = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let user_id: string = req.cookies.uid;
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
        next();
    } catch (error) {
        next(error)
    }
}

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try{
        let user_id : string = req.cookies.uid;
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

export default {isAdmin,isAuthenticated}