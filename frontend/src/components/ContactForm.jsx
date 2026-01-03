import { useState } from "react";
import { createContact } from "../services/contactApi";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm({ onAdd }) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isValid =
    form.name.trim() &&
    form.phone.trim() &&
    (!form.email || form.email.includes("@"));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      setError("Please fill required fields correctly");
      return;
    }

    await createContact(form);
    setForm(initialState);
    setError("");
    setSuccess("Contact saved successfully");
    onAdd();

    setTimeout(() => setSuccess(""), 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Contact</h2>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <div className="form-grid">
        <input
          name="name"
          placeholder="Name *"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone *"
          value={form.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button disabled={!isValid}>Submit</button>
    </form>
  );
}
