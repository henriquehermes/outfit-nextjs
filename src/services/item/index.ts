import api from "../../config/api";

export async function postItem(data: any) {
    try {
        return await api.post("/outfit-item", data);
    } catch (error: any) {
        return error;
    }
}

export async function getItems(userID: string) {
    try {
        return await api.get(`/outfit-item/${userID}`);
    } catch (error: any) {
        return error;
    }
}
