
import Post from "../Models/postModel"







export const postRepositoryImp=()=>{
const createPost=async(post:{
    userId: string;
    description: string;
    image: string[] ;
    userName: string;
})=>{
    const newPost = await new Post(post);

    return await newPost.save();
};


return {
   createPost
}

};


export type postRepositoryType=  typeof postRepositoryImp