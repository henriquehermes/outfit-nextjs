import api from "../../config/api";

export const postUser = async (data: any) => {
    try {
        await api.post("/user", data);
    } catch (error) {
        console.log(error);
    }
};
