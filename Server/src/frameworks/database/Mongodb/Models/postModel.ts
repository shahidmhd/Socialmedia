import mongoose, { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
    },
    image: {
        type : [String]
    }
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

export default Post;


