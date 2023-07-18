import { Request,Response } from "express";
import asyncHandler from "express-async-handler";
// import cloudinary from "../../frameworks/services/cloudstorage";
import cloudinary from "../../frameworks/services/cloudstorage";
import { postRepositoryType } from "../../frameworks/database/Mongodb/repositories/postRepository";
import { postDbInterfaceType } from "../../application/repositories/postDbrepositoryinterface";
import { getAllPosts, postCreate } from "../../application/useCases/post/post";

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
    return {
        createpost,
        getPosts
       
      };
}   


export default postController