import api from "../../config/api";

export async function postUser(data: any) {
    try {
        await api.post("/user", data);
    } catch (error: any) {
        return error;
    }
}
