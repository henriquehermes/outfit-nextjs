import api from "../../config/api";

export async function postUser(data: any) {
    try {
        return await api.post("/user", data);
    } catch (error: any) {
        return error;
    }
}

export async function postLogin(user: any) {
    try {
        return await api.post("/login", user);
    } catch (error: any) {
        return error;
    }
}
