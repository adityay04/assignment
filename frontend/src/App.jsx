import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { fetchContacts } from "./services/contactApi";

function App() {
  const [contacts, setContacts] = useState([]);

  const loadContacts = async () => {
    const data = await fetchContacts();
    setContacts(data);
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <ContactForm onAdd={loadContacts} />
      <ContactList contacts={contacts} onDelete={loadContacts} />
    </div>
  );
}

export default App;
