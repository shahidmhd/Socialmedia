import express from "express";
import { authServiceInterface } from "../../../application/services/authServiceinterface";
import { authService } from "../../services/authService";
import { userDbRepository } from "../../../application/repositories/userDbRepository";
import { userRepositoryMongoDB } from "../../database/Mongodb/repositories/userRepository";
import authController from "../../../adapters/controllers/authcontrollers";


const authRouter=()=>{
    const router = express.Router();
    
    const controller = authController(
        authServiceInterface ,
        authService,
        userDbRepository,
        userRepositoryMongoDB,
        );
   
console.log("hiiiiiiiiiiiiiiiiiiiiii");

    router.post('/register',controller.registerUser)

    
  

    return router
}

export default authRouter