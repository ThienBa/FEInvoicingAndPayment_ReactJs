import { BaseServices } from "../baseServices";

class UserService extends BaseServices {
    constructor() {
        super();
    }

    addUserApi = (newUser) => {
        return this.post(`/api/v1/users`, newUser);
    }

    getAllUserApi = () => {
        return this.get(`/api/v1/users`);
    }

    getDetailUserApi = (user_id) => {
        return this.get(`/api/v1/users/${user_id}`);
    }
}

export const userService = new UserService();