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
      // unique: true,
    },
    number: {
        type: Number,
       
        // unique: true,
    },
    password: {
      type: String,

    }
},
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
