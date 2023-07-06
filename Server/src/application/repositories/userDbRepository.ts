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
  const getUserByEmail = async (email: string) =>
    await repository.getUserByEmail(email);
    const getUserById = async (id: string) => await repository.getUserById(id);
    const getUserByUserName = async (userName: string) =>
    await repository.getUserByUserName(userName);
  
  return {
    addUser,
    getUserByEmail,
    getUserById,
    getUserByUserName,
  };
};
export type UserDbInterface = typeof userDbRepository;