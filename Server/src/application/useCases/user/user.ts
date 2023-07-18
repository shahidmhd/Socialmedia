import { HttpStatus } from "../../../types/httpstatus";
import AppError from "../../../util/appError";
import { UserDbInterface } from "../../repositories/userDbRepository";




export const allUsers = async (
    repository: ReturnType<UserDbInterface>
  ) => {
    const users = await repository.getAllUsers();
  
    if (!users) {
      throw new AppError("user not found", HttpStatus.UNAUTHORIZED);
    }
    return users;
  };

  export const userHandle = async (
    id: string,
    repository: ReturnType<UserDbInterface>
  ) => {
    const result = await repository.userHandle(id);
    if (!result) {
      throw new AppError("Cannot find User", HttpStatus.FORBIDDEN);
    }
    return result;
};

export const userById=async(
  id:string,
  repository:ReturnType<UserDbInterface>
)=>{
  const user=await repository.getUserById(id)
  if(!user){
    throw new AppError("user not found",HttpStatus.UNAUTHORIZED)
  }
  return user
}


export const profileUpdate = async (
  id: string,
  user: {
    name: string;
    userName: string;
    email: string;
    number: string;
    Bio: string;
    image?: string | null;
  },
  repository: ReturnType<UserDbInterface>
) => {
  const updateProfile = await repository.updateProfile(id, user);

  if (!updateProfile) {
    throw new AppError("user not found", HttpStatus.UNAUTHORIZED);
  }
  return updateProfile;
};