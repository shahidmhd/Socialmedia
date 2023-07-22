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

  export const addComment = async (
    postId: string,
    userId: string,
    comment: string,
    repository: ReturnType<postDbInterfaceType>
  ) => {
    const addComment = await repository.addComment(postId,userId,comment);
  
    if (!addComment) {
      throw new AppError("Post not Found", HttpStatus.BAD_REQUEST);
    }
    return addComment;
  };
  export const singlePost = async (
    id: string,
    repository: ReturnType<postDbInterfaceType>
  ) => {
    const getPost = await repository.getSinglePost(id);
    if (!getPost) {
      throw new AppError("Posts Are not Available", HttpStatus.BAD_REQUEST);
    }
    return getPost;
  };

  export const commentDelete = async (
    postId: string,
    userId: string,
    index: number,
    repository: ReturnType<postDbInterfaceType>
  ) => {
    const deleteComment = await repository.deleteComment(postId,userId,index);
  
    if (!deleteComment) {
      throw new AppError("Post not Found", HttpStatus.BAD_REQUEST);
    }
    return deleteComment;
  };