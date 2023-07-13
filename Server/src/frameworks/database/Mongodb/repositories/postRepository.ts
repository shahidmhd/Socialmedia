
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
const getAllPost = async () => {
    return await Post.find().sort({ createdAt: -1 });
  };

return {
   createPost,
   getAllPost
}

};


export type postRepositoryType=  typeof postRepositoryImp