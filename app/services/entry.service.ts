import axios from "axios";

const AxiosClient = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        "Authorization": "Bearer 504a0e1bf0c745fe3fdce1f74a265437cfbd81b6a4d57d4a2083b2b841994b8af574ad22b5323dd9ce00de059e057e06c72571eca797ce2a711c7923a03a42bc896064b2f8ce28d7d57e36a719cedcda05ddf904176ff0555d432c1473534f1756eab2d8bd988b0deb5c8a64bae4ab0b339ca252f4e5929e5f4e897241f0931e",
        "Content-type": "application/json"
    }
});

export const EntryService = {
    getEntries: async (): Promise<Entry[]> => {
        try {
            const {data} = await AxiosClient.get("/entries");
            return data.data;
        } catch (e) {
            console.error(e)
            return [];
        }
    }
}

export type Entry = {
    id: number,
    attributes: {
        name: string,
        lastname: string,
        email: string,
        content: string,
        createdAt: string,
        updatedAt: string
    }
}