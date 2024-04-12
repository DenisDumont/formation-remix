import {json, LoaderFunction} from "@remix-run/node";
import {Outlet} from "@remix-run/react";

export const loader: LoaderFunction = () => {
    return json({})
}

export default function SpecificContact() {

    return (
        <div>
            <h1>Contact</h1>
            <Outlet/>
        </div>
    )
}