import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { UserDbInterface } from "../../application/repositories/userDbRepository";
import { UserRepositoryMongoDB } from "../../frameworks/database/Mongodb/repositories/userRepository";
import { allUsers, followUser, profileUpdate, userById, userHandle } from "../../application/useCases/user/user";
import cloudinary from "../../frameworks/services/cloudstorage";




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
  const getUserById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userById(id,dbRepositoryUser);
    res.json({
      status: "success",
      user,
    });
  });


  const updateProfile = asyncHandler(async (req: Request, res: Response) => {
    const images: any = req?.file?.path;
    const image= await cloudinary.uploader.upload(images)
    const url=image.url
    const { name, userName, email, number, Bio } = req.body;
    const { id } = req.params;
    const user = {
      name,
      userName,
      email,
      number,
      Bio,
      image:url
    };
    const updatedProfile = await profileUpdate(id, user, dbRepositoryUser);
    res.json({
      status: "success",
      updatedProfile,
    });
  });

  const putFollowUser = asyncHandler(async (req: Request, res: Response) => {
    const { friendId } = req.params;
    const { id } = req.body;
    const result = await followUser(id, friendId, dbRepositoryUser);

    res.json({
      status: "success",
      message: "follow request successfully",
      result,
    });
  });

      return {
        getAllUsers,
        handleUser,
        getUserById,
        updateProfile,
        putFollowUser
      }
  }

  export default userController;