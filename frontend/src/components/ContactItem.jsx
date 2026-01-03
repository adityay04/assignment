import { deleteContact } from "../services/contactApi";

export default function ContactItem({ contact, onDelete }) {
  const handleDelete = async () => {
    await deleteContact(contact._id);
    onDelete();
  };

  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email || "-"}</td>
      <td>{contact.phone}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}
