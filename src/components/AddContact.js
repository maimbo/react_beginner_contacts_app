import React, { useState } from "react";

function AddContact() {
  const defaultState = { id: 0, name: "", email: "" };
  const [contact, setContact] = useState(defaultState);

  const addContact = (e) => {
    e.preventDefault();

    console.log("addContact");
    contact.id = Math.random();
    console.log(contact);

    setContact(defaultState);
  };

  return (
    <div className="ui main container">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={addContact}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}

export default AddContact;
