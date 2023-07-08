import express from "express";
import { authServiceInterface } from "../../../application/services/authServiceinterface";
import { authService } from "../../services/authService";
import { userDbRepository } from "../../../application/repositories/userDbRepository";
import { userRepositoryMongoDB } from "../../database/Mongodb/repositories/userRepository";
import authController from "../../../adapters/controllers/authcontrollers";
import { adminDbRepository } from "../../../application/repositories/adminDbrepositoryinterface";
import { adminRepositoryMongoDB } from "../../database/Mongodb/repositories/adminRepository";


const authRouter=()=>{
    const router = express.Router();
    
    const controller = authController(
        authServiceInterface ,
        authService,
        userDbRepository,
        userRepositoryMongoDB,
        adminDbRepository,
        adminRepositoryMongoDB
        );
   

    router.post('/register',controller.registerUser)
    router.post('/login',controller.loginUser)
    router.post('/adminLogin',controller.adminLogin)

    
  

    return router
}

export default authRouter