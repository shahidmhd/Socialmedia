import { HttpStatus } from "../../../types/httpstatus";
import AppError from "../../../util/appError";
import { postDbInterfaceType } from "../../repositories/postDbrepositoryinterface";


export const postCreate = async (
    post: {
      userId: string;
      description: string;
      image: string[] ;
      userName: string;
    },
    repository: ReturnType<postDbInterfaceType>
  ) => {
    const newPost = await repository.createPost(post);
  if (!newPost) {
    throw new AppError("post not created", HttpStatus.BAD_REQUEST);
  }
  return newPost;
  }