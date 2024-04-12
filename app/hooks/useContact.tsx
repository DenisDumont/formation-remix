export default function useContact(id: string) {
    const contacts = [
        {
            id: '1', name: 'John Doe',
            email: 'johnÎ@example.com',
            phone: '123-456-7890'
        }, {
            id: '2', name: 'Jane Doe',
            email: 'jane@exemple.com',
            phone: '098-765-4321'
        }
    ]


    return {
        contact: contacts.find(contact => contact.id === id) ?? null
    }
}