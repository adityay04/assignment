import ContactItem from "./ContactItem";

export default function ContactList({ contacts, onDelete }) {
  if (!contacts.length) return <p>No contacts found.</p>;

  return (
    <>
      <h2>Saved Contacts</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <ContactItem
              key={c._id}
              contact={c}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
