import api from "../../config/api";

export async function postOutfit(data: any) {
    try {
        return await api.post("/outfit", data);
    } catch (error: any) {
        return error;
    }
}
