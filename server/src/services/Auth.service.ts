import { EntityManager } from "typeorm";
import { getLogger } from "../components/Logger"

export class UserService {
  private logger = getLogger();

  constructor(manager: EntityManager) {

  }

  public registerUser = (username: string, password: string) => {
    try {
      this.logger.info(`uname is ${username} pword is ${password}`);
    } catch (err: any) {
      throw err;
    }
  }
}