import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,

    },
    email: {
      type: String,
      required: true,
    },
    number: {
        type: Number,
    },
    password: {
      type: String,

    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    Bio:{
      type:String,
    },
    image:{
      type:String,
      default:'https://cdn.freebiesupply.com/logos/large/2x/trend-logo-png-transparent.png'
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
},
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
