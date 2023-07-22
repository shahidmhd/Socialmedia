import { Request,Response } from "express";
import asyncHandler from "express-async-handler";
// import cloudinary from "../../frameworks/services/cloudstorage";
import cloudinary from "../../frameworks/services/cloudstorage";
import { postRepositoryType } from "../../frameworks/database/Mongodb/repositories/postRepository";
import { postDbInterfaceType } from "../../application/repositories/postDbrepositoryinterface";
import { addComment, commentDelete, getAllPosts, getUserPosts, postCreate, postLike, singlePost } from "../../application/useCases/post/post";

interface UploadedFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
  }
const postController=(
  postDbInterface:postDbInterfaceType,
  postDbImp:postRepositoryType
)=>{

const dbRepositoryPost=postDbInterface(postDbImp())
    const createpost=asyncHandler(async(req:Request,res:Response)=>{
        const files = req.files as UploadedFile[];
        const image: string[] = [];
        for (const file of files) {
          const result = await cloudinary.uploader.upload(file.path);
          const url: string = result.secure_url;
          image.push(url);
        }
       
       console.log(image,"imageurls");
       console.log(req.body,"userdatassss");
       const {userId,description,userName}=req.body
       console.log(userId,description,userName);
       
       const post = { userId, description,image, userName };
       const newPost = await postCreate(post, dbRepositoryPost);
  
       res.json({
         status: "success",
         newPost,
       });
    })


    const getPosts = asyncHandler ( async (req:Request, res: Response) => {
      const posts = await getAllPosts(dbRepositoryPost)
      res.json({
        status : "success",
        posts
      })
    })


    const getUserPost = asyncHandler ( async (req:Request, res: Response) => {
      const {userId} = req.params
      const posts = await getUserPosts(userId, dbRepositoryPost)
      res.json({
        status : "success",
        posts
      })
    })

    const likePost = asyncHandler( async (req: Request, res: Response) => {
      const{id} = req.params
      const{loggedId} = req.body
      
      const likedPost = await postLike(id,loggedId,dbRepositoryPost)
      res.json({
        status: "success",
        message: "Successfully liked",
        likedPost
      })
    })

    const commentPost = asyncHandler( async (req: Request, res: Response) => {
      const{postId} = req.params
      const {userId,comment} = req.body
      const commentAdded = await addComment(postId,userId,comment,dbRepositoryPost)
      res.json({
        status: "success",
        message: "Successfully commentAdded",
        commentAdded
      })
    })

    const deleteComment = asyncHandler( async (req: Request, res: Response) => {
      const{postId} = req.params
      const {userId,index} = req.body
      const deletedComment = await commentDelete(postId,userId,index,dbRepositoryPost)
      res.json({
        status: "success",
        message: "Successfully commentAdded",
        deletedComment
      })
    })
    const getSinglePost = asyncHandler ( async (req:Request, res: Response) => {
      const {id} = req.params
   
      
      const posts = await singlePost(id, dbRepositoryPost)
      res.json({
        status : "success",
        posts
      })
    })
    return {
        createpost,
        getPosts,
        getUserPost,
        likePost,
        commentPost,
        deleteComment,
        getSinglePost
       
      };
}   


export default postController