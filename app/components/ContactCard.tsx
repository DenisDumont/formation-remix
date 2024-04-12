import useContact from "~/hooks/useContact";

export default function ContactCard({id}:{id:string}) {
    const {contact} = useContact(id)

    return (
        <div>
            <h2>Contact Card</h2>
            <p>ID: {contact?.id}</p>
            <p>Email: {contact?.email}</p>
            <p>Phone: {contact?.phone}</p>
        </div>
    )
}