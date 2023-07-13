import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { UserDbInterface } from "../../application/repositories/userDbRepository";
import { UserRepositoryMongoDB } from "../../frameworks/database/Mongodb/repositories/userRepository";
import { allUsers, userHandle } from "../../application/useCases/user/user";




const userController = (
    userDbRepository:UserDbInterface,
    userDbRepositoryImpl:UserRepositoryMongoDB
  ) => {
    const dbRepositoryUser = userDbRepository(userDbRepositoryImpl());


    const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
        const users =await allUsers(dbRepositoryUser);
        res.json({
          status: "success",
          users,
        });
      });
const handleUser = asyncHandler(async (req: Request, res: Response) => {   
    const { id } = req.params;

    const isBlocked = await userHandle(id, dbRepositoryUser);
    res.json({
      status: "success",
      isBlocked,
    });
  });


      return {
        getAllUsers,
        handleUser
      }
  }

  export default userController;