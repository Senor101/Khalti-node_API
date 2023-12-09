import { Request, Response, NextFunction } from "express";
import request from "request";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();


const payToMerch = async (req:Request, res:Response, next:NextFunction) => {
    const {amount} : {amount :number} = req.body;
    let options = {
        "method" :"POST",
        "url" : "https://khalti.com/api/v2/payment/verify/",
        "headers": {
            "Authorization":`Key ${process.env.KHALTI_SECRET_KEY}`,
        },
        data: JSON.stringify({
            "return_url": "http://localhost:8000",
            "website_url": "https://localhost:8000",
            "amount": `${amount*100}`,
            "purchase_order_id": "Order01",
            "purchase_order_name": "test",
            "customer_info": {
                "name": "Ram Bahadur",
                "email": "test@khalti.com",
                "phone": "9800000001"
            }
        })
    }
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });
    // const responseBody = await axios.post(options.url,{
    //     "return_url": "http://localhost:8000",
    //     "website_url": "https://localhost:8000",
    //     "amount": `${amount*100}`,
    //     "purchase_order_id": "Order01",
    //     "purchase_order_name": "test",
    //     "customer_info": {
    //         "name": "Ram Bahadur",
    //         "email": "test@khalti.com",
    //         "phone": "9800000001"
    //     }
    // },{
    //     headers:{
    //         "Content-Type": 'application/json',
    //         "Authorization":`Key ${process.env.KHALTI_SECRET_KEY}`,
    //     }
    // });
    // console.log(responseBody.data)
    return res.status(200).json({
        message: "Checking the controller.",
        // data:responseBody.body
    })
}

const getMerch = async (req:Request, res:Response, next: NextFunction) => {
    try{

        return res.status(200).json({
            body:null
        })
    }catch(error){
        next(error);
    }   
}

export default {payToMerch,getMerch}