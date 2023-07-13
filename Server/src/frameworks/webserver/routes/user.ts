import express from "express";
import { userDbRepository } from "../../../application/repositories/userDbRepository";
import { userRepositoryMongoDB } from "../../database/Mongodb/repositories/userRepository";
import userController from "../../../adapters/controllers/usercontroller";

const userRouter = () => {
  const router = express.Router();
  const controller = userController(userDbRepository,userRepositoryMongoDB);
 
  router.get("/getUsers",controller.getAllUsers)
  router.put("/:id/userHandle", controller.handleUser);

  

  return router;
};
export default userRouter;