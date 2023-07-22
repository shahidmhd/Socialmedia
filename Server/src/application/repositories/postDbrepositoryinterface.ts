import { postRepositoryType } from "../../frameworks/database/Mongodb/repositories/postRepository";


export const postDbInterface = (repository:ReturnType<postRepositoryType>) => {
    const createPost =   async (post:{
        userId: string;
        description: string;
        image: string[] ;
        userName: string;
    })=> await repository.createPost(post)
    const getAllPost = async () => await repository.getAllPost()
    const getUserPosts = async (id: string) => await repository.getUserPosts(id)
    const getSinglePost = async (id: string) => await repository.getSinglePost(id)
    const likePost = async (id: string, loggedId: string) => await repository.likePost(id, loggedId)
    const addComment = async ( postId: string,userId: string,comment: string) => await repository.addComment(postId,userId,comment)
    const deleteComment = async ( postId: string,userId: string,index: number) => await repository.deleteComment(postId,userId,index)
    return {
        createPost,
        getAllPost,
        getUserPosts,
        likePost,
        addComment,
        deleteComment,
        getSinglePost
    }
}


export type postDbInterfaceType= typeof postDbInterface