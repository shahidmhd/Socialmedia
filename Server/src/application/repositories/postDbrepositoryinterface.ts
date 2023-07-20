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
    const likePost = async (id: string, loggedId: string) => await repository.likePost(id, loggedId)
    return {
        createPost,
        getAllPost,
        getUserPosts,
        likePost
    }
}


export type postDbInterfaceType= typeof postDbInterface