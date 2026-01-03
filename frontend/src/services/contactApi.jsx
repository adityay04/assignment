const API_URL = "http://localhost:5000/api/contacts";

export const fetchContacts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createContact = async (contact) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact)
  });
  return res.json();
};

export const deleteContact = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
