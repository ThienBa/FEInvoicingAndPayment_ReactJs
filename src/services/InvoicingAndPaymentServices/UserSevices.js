import { BaseServices } from "../baseServices";

class UserService extends BaseServices {
    constructor() {
        super();
    }

    addUserApi = (newUser) => {
        return this.post(`/api/v1/users`, newUser);
    }
}

export const userService = new UserService();