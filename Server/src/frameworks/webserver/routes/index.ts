import { Application } from "express";
import authRouter from "./auth"
import postRouter from "./post";
import userRouter from "./user";

import userAuthMiddleware from "../middlewears/Authmiddlewear"
const routes = (app: Application) => {
    
    app.use("/api/auth",authRouter());
    app.use("/api/post",userAuthMiddleware,postRouter())
    app.use("/api/user", userRouter());

  };
  
  export default routes;
  