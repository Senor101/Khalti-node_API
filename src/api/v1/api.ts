import express,{Request,Response} from "express";

const router = express.Router();

router.get("/",(req:Request ,res:Response) => {
    res.send("<h1 align=center>This is the homepage for NODE-KHALTI API.</h1>")
})

export default router;