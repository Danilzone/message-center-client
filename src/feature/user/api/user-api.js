import axios from "axios";
import { API_URL, API_HEADER_AUTH, API_HEADER_REG } from "../../../shared";



class UserAPI {

    async auth(data) {
        try {
            const res = await axios.post(`${API_URL}/auth/jwt/login`, data, { headers: API_HEADER_AUTH })
            return res
        } catch (err) {
            if (err.response) {
                alert(`Code: ${err.response.status}\n${err.response.data.detail}`)
            } else {
                alert("Произошла ошибка. Пожалуйста, повторите попытку позже.")
            }
        }
    }

    async registration(data) {
        try {
            const res = await axios.post(`${API_URL}/auth/register`, data, { headers: API_HEADER_REG })
            return res
        } catch (err) {
            if (err.response) {
                alert(`Code: ${err.response.status}\n${err.response.data.detail}`)
            } else {
                alert("Произошла ошибка. Пожалуйста, повторите попытку позже.")
            }
        }
    }
}
 
export const UserApi = new UserAPI()