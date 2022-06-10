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
            const filteredArray = items.filter((value: Item) =>
                categories.includes(value.category),
            );

            const result = filteredArray.reduce(
                (previousValue: any, currentValue: any) => {
                    previousValue[currentValue.category] = [
                        ...(previousValue[currentValue.category] || []),
                        currentValue,
                    ];
                    return previousValue;
                },
                {},
            );

            return result;
        } else {
            return response;
        }
    } catch (error: any) {
        return error;
    }
}
