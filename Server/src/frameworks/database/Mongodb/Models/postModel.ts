import mongoose, { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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
    },
    likes: [],
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

export default Post;


