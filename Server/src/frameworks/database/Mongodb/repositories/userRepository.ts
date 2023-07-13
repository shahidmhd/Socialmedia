import User from "../Models/userModel";

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
        const user: any = await User.findOne({ email });
        return user;
      };

      const getUserById = async (id: string) => {
        const user: any = await User.findOne({ _id: id });
        return user;
      };
      const getUserByUserName = async (userName: string) => {
        const user: any = await User.findOne({ userName });
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
      
    
  
    return {
      addUser,
      getUserByEmail,
      getUserById,
      getUserByUserName ,
      getAllusers,
      userHandle
    };
  };
  
  export type UserRepositoryMongoDB = typeof userRepositoryMongoDB;
  