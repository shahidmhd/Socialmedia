"use strict";
// import multer from 'multer'
// import { v2 as cloudinaryV2 } from 'cloudinary'
// import {CloudinaryStorage} from 'multer-storage-cloudinary'
// import { v4 as uuidv4 } from 'uuid';
// cloudinaryV2.config({ 
//     cloud_name:"dxe7xokgr", 
//     api_key:"234154323143947", 
//     api_secret:"XqsKt8Yy81uw4t4uUEkgsp6fmgI"
//   });
// // Configure multer storage using Cloudinary
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinaryV2,
//     params: {
//         folder: (req :any, file:any) => 'uploads', // Specify the folder in Cloudinary where you want to store the files
//       public_id: (req:Express.Request, file:Express.Multer.File) => {
//         const fileName = `${uuidv4()}-${file.originalname}`;
//         return fileName;
//       }
//     }
//   });
//   // Create multer instance with Cloudinary storage
//   const upload = multer({ storage });
//   export { upload };
