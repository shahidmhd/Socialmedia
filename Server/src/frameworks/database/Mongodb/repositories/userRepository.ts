import User from "../Models/userModel";
import { UserInterface } from "../../../../interface/userIntrface";

export const userRepositoryMongoDB = () => {
    const addUser = async (user: {
      name: string;
      userName: string;
      email: string;
      number?: number;
      password?: string;
    }) => {
      const newUser = await new User(user);
  
      return await newUser.save();
    };


    const getUserByEmail = async (email: string) => {
        const user:UserInterface | null = await User.findOne({ email });
        return user;
      };

      const getUserById = async (id: string) => {
        const user:UserInterface | null = await User.findOne({ _id: id });
        return user;
      };
      const getUserByUserName = async (userName: string) => {
        const user: UserInterface | null = await User.findOne({ userName }).populate(['following', 'followers']);        
        return user;
      };
      const getAllusers = async () => {
        return await User.find()
      };
      const userHandle = async (id: string) => {
        try {
          const user: any = await User.findOne({ _id: id });
          if (!user) {
            return;
          }
          const newIsBlocked = !user.isBlocked;
          user.isBlocked = newIsBlocked;
          return await user.save();
        } catch (error) {
          console.error(`Error updating user with ID ${id}:`, error);
        }
      };
      const updateProfile = async (
        id: string,
        user: {
          name: string;
          userName: string;
          email: string;
          number?: string;
          Bio?: string |null;
          image?: string | null;
        }
      ) => {
        const updatedProfile: any = await User.findByIdAndUpdate(id, user, {
          new: true,
        });
        return updatedProfile;
      };

      const followUser = async (id: string, friendId: string) => {
        const followingUser: any = await User.findOne({ _id: id });
        const follow: any = await User.findOne({ _id: friendId });
        
        if (!follow.followers.includes(id)) {
          await followingUser.updateOne(
            {
              $push: {
                following: friendId,
              },
            },
            { new: true }
          );
          await follow.updateOne(
            {
              $push: {
                followers: id,
              },
            },
            { new: true }
          );
        } else {
          await followingUser.updateOne(
            {
              $pull: {
                following: friendId,
              },
            },
            { new: true }
          );
          await follow.updateOne(
            {
              $pull: {
                followers: id,
              },
            },
            { new: true }
          );
        }
        const user: any = await User.findOne({ _id: id }).select("-password");
        
        const following = await Promise.all(
          user.following.map(
            async (id: string) => await User.findById(id).select("-password")
          )
        );

        console.log(following,"following");
        
    
        const followers = await Promise.all(
          user.followers.map(
            async (id: string) => await User.findById(id).select("-password")
          )
        );
        
    
        return { following, followers };
      };
      
    
  
    return {
      addUser,
      getUserByEmail,
      getUserById,
      getUserByUserName ,
      getAllusers,
      userHandle,
      updateProfile,
      followUser
    };
  };
  
  export type UserRepositoryMongoDB = typeof userRepositoryMongoDB;
  