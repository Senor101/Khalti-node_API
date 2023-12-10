import express, {Express, Request, Response} from "express";
import cors from "cors";
import apiRouterv1 from "./api/v1/api";

const app:Express = express();


app.use(cors());
app.use(express.json());

app.use("/api/v1",apiRouterv1);
export default app;