import {json} from "@remix-run/node";
import {PersonService} from "~/services/person.service";
import {useLoaderData} from "@remix-run/react";

export async function loader() {
    const persons = await PersonService.getPersons();
    return json({persons})
}

export default function Persons() {
    const {persons} = useLoaderData<typeof loader>()
    return (
        <main>
            <h1>Persons</h1>
            <ul>
                {persons.map(person => (
                    <li key={person.id}>{person.name}</li>
                ))}
            </ul>
        </main>
    )
}