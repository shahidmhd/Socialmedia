import { Application } from "express";
import authRouter from "./auth"
import postRouter from "./post";

const routes = (app: Application) => {
    
    app.use("/api/auth",authRouter());
    app.use("/api/post",postRouter())

  };
  
  export default routes;
  