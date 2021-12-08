import { BaseServices } from "../baseServices";

class UserService extends BaseServices {
    constructor() {
        super();
    }

    addUserApi = (newUser) => {
        return this.post(`/users`, newUser);
    }

    getAllUserApi = () => {
        return this.get(`/users`);
    }

    getDetailUserApi = (user_id) => {
        return this.get(`/users/${user_id}`);
    }
}

export const userService = new UserService();