import express from 'express'
import postController from '../../../adapters/controllers/postcontrollers';
import upload from '../../services/upload';
import { postDbInterface } from '../../../application/repositories/postDbrepositoryinterface';
import { postRepositoryImp } from '../../database/Mongodb/repositories/postRepository';


const postRouter=()=>{
    const router = express.Router();
    const controller=postController(postDbInterface,postRepositoryImp)

    router.post("/",upload.array('picture',4) ,controller.createpost);
    router.get("/",controller.getPosts)
    router.get('/:userId',controller.getUserPost)
    router.put('/:id/like',controller.likePost)
    router.put("/:postId/comment",controller.commentPost)
    router.put("/:postId/commentDelete",controller.deleteComment)
    router.get('/singlePost/:id',controller.getSinglePost)
return router;
}


export default postRouter