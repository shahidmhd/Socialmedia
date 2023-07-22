
import Post from "../Models/postModel"


import User from "../Models/userModel";




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

    // const data: any = await Post.findById({ _id: id });
    return post
  };


  const addComment = async (postId:string, userId:string , comment:string) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $push: { comments: { userId, comment } } },
        { new: true }
      ).populate({
        path: 'comments.userId',
        model: 'User', // Replace 'User' with the actual name of your User schema
        select: 'userName image', // You can choose which fields to include
      });
      return updatedPost;
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const deleteComment = async (postId:string, userId:string , index:number) => {
    try {
      const post = await Post.findById(postId);
  
      if (!post) {
        // Handle case when post is not found
        return;
      }
  
      post.comments.splice(index, 1);
      await post.save();
  
      return post;
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const getSinglePost = async (id: string) => {
    return await Post.findById(id)  .populate({
      path: 'comments',
      populate: {
        path: 'userId',
        model: User,
        select: 'userName image', // You can choose which fields to include from the User model
      },
    })
    .exec();
  };
return {
   createPost,
   getAllPost,
   getUserPosts,
   likePost,
   addComment,
   deleteComment,
   getSinglePost
}

};


export type postRepositoryType=  typeof postRepositoryImp