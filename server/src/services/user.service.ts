import { EntityManager } from "typeorm";
import { getLogger } from "../components/Logger"
import { UserEntity } from "../entities/user";
import { HTTPError } from "../components/Error";
import { generateToken, hash } from "../utils/crypt";

export class UserService {
  private logger = getLogger();
  private manager: EntityManager;

  constructor(manager: EntityManager) {
    this.manager = manager;
  }

  public registerUser = async (email: string, password: string): Promise<string> => {
    try {
      const user = await this.manager
        .createQueryBuilder(UserEntity, "user")
        .where("user.email = :email", { email: email })
        .getOne();

      if (user) {
        this.logger.info(`An error occurreed when attempting to create a user with an already exisitng email '${email}'.`);
        throw new HTTPError(409, "User with that email already exists.");
      } else {
        // hash password
        const hashedPassword = hash(password);

        const newUser = new UserEntity();
        newUser.email = email;
        newUser.password = hashedPassword;

        await this.manager.save(newUser);
        this.logger.info(`Created user with email '${email}'.`);
        
        const token = generateToken(newUser.id);
        return token;
      }
    } catch (err: any) {
      throw err;
    }
  }

  public loginUser = async (email: string, password: string): Promise<string> => {
    try {
      const user = await this.manager
        .createQueryBuilder(UserEntity, "user")
        .where("user.email = :email", { email: email })
        .getOne();

      console.log(user);
      if (user) {
        if (hash(password) === user.password) {
          const token = generateToken(user.id);
          return token;
        } else {
          this.logger.info(`User with email '${email}' failed to provide a correct password.`);
          throw new HTTPError(401, "Invalid credentials.");  
        }
      } else {
        this.logger.info(`No user found with the given email '${email}'.`);
        throw new HTTPError(401, "User with that email does not exist.");
      }
    } catch (err: any) {
      throw err;
    }
  }
}