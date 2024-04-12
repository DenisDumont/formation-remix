import {json, LoaderFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import ContactCard from "~/components/ContactCard";

export const loader: LoaderFunction = ({params}) => {
    return json({id: params.id})
}

export default function SpecificContact() {
    const {id} = useLoaderData<typeof loader>()

    return (
        <main>
            <h1>Contacter: {id}</h1>
            <ContactCard id={id}/>
        </main>
    )
}