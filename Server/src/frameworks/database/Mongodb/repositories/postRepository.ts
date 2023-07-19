
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
 const allpost= await Post.find().sort({ createdAt: -1 }).populate('userId'); 
 console.log(allpost,"hiiiiii");
 
 return allpost
};

return {
   createPost,
   getAllPost
}

};


export type postRepositoryType=  typeof postRepositoryImp