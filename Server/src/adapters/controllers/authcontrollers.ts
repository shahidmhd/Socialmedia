import { Request, Response } from "express";
import { UserDbInterface } from "../../application/repositories/userDbRepository";
import { UserRepositoryMongoDB } from "../../frameworks/database/Mongodb/repositories/userRepository";
import { AuthServiceInterface } from "../../application/services/authServiceinterface";
import { AuthService } from "../../frameworks/services/authService"
import asyncHandler from 'express-async-handler'
import {
    userLogin,
    userRegister,
  } from "../../application/useCases/auth/userAuth";



const authController = (
    authServiceInterface: AuthServiceInterface,
    authServiceImpl: AuthService,
    userDbRepository: UserDbInterface,
    userDbRepositoryImpl: UserRepositoryMongoDB,
  ) => {
    const dbRepositoryUser = userDbRepository(userDbRepositoryImpl());
    const authService = authServiceInterface(authServiceImpl());
  




    const registerUser = asyncHandler(async (req: Request, res: Response) => {
      const { name, userName, email, number, password } = req.body;
      console.log(name,"bhvdxvdxjvdxkjv");
      
      const user = {
        name,
        userName,
        email,
        number,
        password,
      };
      const token = await userRegister(user, dbRepositoryUser, authService);
      console.log(token,"token");
      
      res.json({
        status: "success",
        message: "new user registered",
        token: token,
      });
    });
  

    const loginUser = asyncHandler(async (req: Request, res: Response) => {
        const { userName, password }: { userName: string; password: string } =req.body;
        console.log(userName,password,"hhhhhhhhhhhhhh");
        
        const token = await userLogin(
          userName,
          password,
          dbRepositoryUser,
          authService
        );
        res.json({
          status: "success",
          message: "user verified",
          token,
        });
      });





  
    return {
      registerUser,
      loginUser
  };
};
  
  export default authController
  