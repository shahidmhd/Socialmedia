
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

const getUserPosts = async (id: string) => {
    return await Post.find({ userId: id }).sort({ createdAt: -1 });
  };

  const likePost = async (id: string, loggedId: string) => {
    const post: any = await Post.findById({ _id: id });

    if (!post.likes.includes(loggedId)) {
      await post.updateOne(
        {
          $push: {
            likes: loggedId,
          },
        },
        { new: true }
      );
    } else {
      await post.updateOne(
        {
          $pull: {
            likes: loggedId,
          },
        },
        { new: true }
      );
    }
    return post;
  };
return {
   createPost,
   getAllPost,
   getUserPosts,
   likePost
}

};


export type postRepositoryType=  typeof postRepositoryImp