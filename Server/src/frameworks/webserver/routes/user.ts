import express from "express";
import { userDbRepository } from "../../../application/repositories/userDbRepository";
import { userRepositoryMongoDB } from "../../database/Mongodb/repositories/userRepository";
import userController from "../../../adapters/controllers/usercontroller";
import userAuthMiddleware from "../middlewears/Authmiddlewear";
import upload from '../../services/upload';
const userRouter = () => {
  const router = express.Router();
  const controller = userController(userDbRepository,userRepositoryMongoDB);
 
  router.get("/getUsers",controller.getAllUsers)
  router.put("/:id/userHandle", controller.handleUser);
  router.get("/:id",userAuthMiddleware,controller.getUserById);
  router.put("/:id/updateprofile",upload.single("image"),controller.updateProfile)

  

  return router;
};
export default userRouter;