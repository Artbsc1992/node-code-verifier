import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess  } from "../../utils/logger";

//CRUD 

/**
 * Method to obtain all Users from collections "Users" in Mongo server
 */

export const GetAllUsers = async (): Promise<any[] | undefined> => {
  try {
    let userModel = userEntity();

    // Search all users using find
    return await userModel.find({isDelete: false})
  } catch (error) {
    LogError(`[ORM ERROR]: Getting All Users: ${error}`)
  }
}

//TODO:
//- Get user by id
//- Get user by email
//- Delete user by Id
//- Create new user
//- Update User by id