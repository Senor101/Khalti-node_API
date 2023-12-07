import { Request, Response, NextFunction } from "express";
import request from "request";

const payToMerch = async (req:Request, res:Response, next:NextFunction) => {
    let options = {
        "method" :"POST",
        "url" : "",
        "headers": {
            "Authorization":"",
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            "return_url": "http://example.com/",
            "website_url": "https://example.com/",
            "amount": "1000",
            "purchase_order_id": "Order01",
            "purchase_order_name": "test",
            "customer_info": {
                "name": "Ram Bahadur",
                "email": "test@khalti.com",
                "phone": "9800000001"
            }
        })
    }
    const responseBody = request(options);
    console.log(responseBody)
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