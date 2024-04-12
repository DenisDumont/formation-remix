import axios from "axios";

const AxiosClient = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    headers: {
        "Content-type": "application/json"
    }
});

export const PersonService = {
    getPersons: async (): Promise<Person[]> => {
        try {
            const {data} = await AxiosClient.get("/character");
            return data.results;
        } catch (e) {
            console.error(e)
            return [];
        }
    }
}


export type Person = {
    "id": number,
    "name": string,
    "status": string,
    "species": string,
    "type": string,
    "gender": string,
    "origin": {
        "name": string,
        "url": string
    },
    "location": {
        "name": string,
        "url": string
    },
    "image": string,
    "episode": string[],
    "url": string,
    "created": string
}