import {json} from "@remix-run/node";
import {EntryService} from "~/services/entry.service";
import {useLoaderData} from "@remix-run/react";

export async function loader() {
    const entries = await EntryService.getEntries();
    return json({entries})
}


export default function Contact() {
    const {entries} = useLoaderData<typeof loader>()
    return (
        <main>
            <h1>Index</h1>
            <ul>
                {entries.map(entry => (
                    <li key={entry.id}>{entry.attributes.name}</li>
                ))}
            </ul>
        </main>
    )
}