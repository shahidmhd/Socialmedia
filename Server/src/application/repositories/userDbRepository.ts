import { UserRepositoryMongoDB } from "../../frameworks/database/Mongodb/repositories/userRepository";

export const userDbRepository = (
  repository: ReturnType<UserRepositoryMongoDB>
) => {
  const addUser = async (user: {
    name: string;
    userName: string;
    email: string;
    number?: number;
    password?: string;
  }) => {
    return await repository.addUser(user);
  };

  const updateProfile = async (
    id: string,
    user: {
      name: string;
      userName: string;
      email: string;
      number?: string;
      Bio?: string;
      image?: string | null;
    }
  ) => await repository.updateProfile(id, user);

  const getAllUsers = async () => await repository.getAllusers();
  const getUserByEmail = async (email: string) =>
    await repository.getUserByEmail(email);
    const getUserById = async (id: string) => await repository.getUserById(id);
    const getUserByUserName = async (userName: string) =>
    await repository.getUserByUserName(userName);
    const userHandle = async (id: string) =>
    await repository.userHandle(id);
    const followUser = async (id: string, friendId: string) =>
    await repository.followUser(id, friendId);
  return {
    addUser,
    getUserByEmail,
    getUserById,
    getUserByUserName,
    getAllUsers,
    userHandle,
    updateProfile,
    followUser
  };
};
export type UserDbInterface = typeof userDbRepository;