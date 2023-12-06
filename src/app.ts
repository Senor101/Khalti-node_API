import express, {Express, Request, Response} from "express";

import apiRouterv1 from "./api/v1/api";

const app:Express = express();

app.use(express.json());

app.use("/api/v1",apiRouterv1);
export default app;