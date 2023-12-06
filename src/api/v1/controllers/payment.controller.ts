import { Request, Response, NextFunction } from "express"

const payToMerch = async (req:Request, res:Response, next:NextFunction) => {
    return res.status(200).json({
        message: "Checking the controller."
    })
}

const getMerch =async (req:Request, res:Response, next: NextFunction) => {
    try{
        return res.status(200).json({
            body:null
        })
    }catch(error){
        next(error);
    }   
}

export default {payToMerch,getMerch}