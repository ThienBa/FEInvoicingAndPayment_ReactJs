import Axios from "axios"
import { DOMAIN } from "../utils/configs"

export class BaseServices {
    post = (url, data) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'POST',
            data,
        })
    }

    get = (url) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'GET',
        })
    }
}
