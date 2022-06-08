import api from "../../config/api";
import { Item } from "../../screens/Create/interface";

export async function postItem(data: any) {
    try {
        return await api.post("/item", data);
    } catch (error: any) {
        return error;
    }
}

export async function getItems(userID: string, categories: string[]) {
    try {
        const response = await api.get(`/item/${userID}`);

        const items = response.data?.items;

        if (items) {
            let temp = [];

            for (let ite = 0; ite < items.length; ite++) {
                for (let cat = 0; cat < categories.length; cat++) {
                    if (items[ite].category === categories[cat]) {
                        temp.push(items[ite]);
                    }
                }
            }

            return temp;
        } else {
            return response;
        }
    } catch (error: any) {
        return error;
    }
}
