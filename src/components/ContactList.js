import React, { useState } from "react";
function ContactList({ data = [] }) {
  const [contacts, setContacts] = useState(data);

  return (
    <div>
      {Object.keys("contacts").length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} | {contact.email}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default ContactList;
