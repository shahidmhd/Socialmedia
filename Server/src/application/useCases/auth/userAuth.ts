
import { HttpStatus } from "../../../types/httpstatus"
import { UserDbInterface } from "../../repositories/userDbRepository";
import AppError from "../../../util/appError"
import { AuthServiceInterface } from "../../services/authServiceinterface";

export const userRegister = async (
  user: {
    name: string;
    userName: string;
    email: string;
    number: number;
    password: string;
  },
  userRepository: ReturnType<UserDbInterface>,
  authService: ReturnType<AuthServiceInterface>
) => {
  user.email = user.email.toLowerCase();
  const isExistingEmail = await userRepository.getUserByEmail(user.email);
  if (isExistingEmail) {
    throw new AppError(
      "An account is already registered with this mail",
      HttpStatus.UNAUTHORIZED
    );
  }
  if (user.password.length <= 3) {
    throw new AppError("Password Empty", HttpStatus.BAD_REQUEST);
  }
  user.password = await authService.encryptPassword(user.password);
  const users = await userRepository.addUser(user);
  const userId = users._id;
  const token = authService.generateToken(userId.toString());
  return { token, user: users };
};


