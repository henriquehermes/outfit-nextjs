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
            let arrays: any = {};

            // this function create N arrays of categories
            categories.forEach(function (x) {
                arrays[x] = [];
            });

            for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
                for (
                    let catIndex = 0;
                    catIndex < categories.length;
                    catIndex++
                ) {
                    if (items[itemIndex].category === categories[catIndex]) {
                        let actualCat = categories[catIndex];
                        arrays[actualCat].push(items[itemIndex]);
                    }
                }
            }

            return arrays;
        } else {
            return response;
        }
    } catch (error: any) {
        return error;
    }
}
