
import multer from "multer";
import path from "path";

export default multer({
  storage: multer.diskStorage({}),
  limits: {
    files: 4,
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: (req:any, file:any, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".webp") {
      cb(null, false);
    } else {
      cb(null, true);
    }
  },
  
});