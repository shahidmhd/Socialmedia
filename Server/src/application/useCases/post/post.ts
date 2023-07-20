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


  export const getAllPosts = async (
    repository: ReturnType<postDbInterfaceType>
  ) => {
    const getPosts = await repository.getAllPost();
    if (!getPosts) {
      throw new AppError("Posts Are not Available", HttpStatus.BAD_REQUEST);
    }
    return getPosts;
  };


  export const getUserPosts = async (
    id: string,
    repository: ReturnType<postDbInterfaceType>
  ) => {
    const getPosts = await repository.getUserPosts(id);
    if (!getPosts) {
      throw new AppError("Posts Are not Available", HttpStatus.BAD_REQUEST);
    }
    return getPosts;
  };


  export const postLike = async (
    id: string,
    loggedId: string,
    repository: ReturnType<postDbInterfaceType>
  ) => {
    const likedPost = await repository.likePost(id, loggedId);
  
    if (!likedPost) {
      throw new AppError("Post not Found", HttpStatus.BAD_REQUEST);
    }
    return likedPost;
  };