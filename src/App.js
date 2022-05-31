import React from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

const App = () => {
  const contacts = [
    { id: 1, name: "lorenzo", email: "lorenzo@mail.com" },
    { id: 2, name: "fernadez", email: "fernadez@mail.com" },
  ];
  return (
    <div>
      <h1>React App</h1>
      <Header />
      <AddContact />
      <ContactList data={contacts} />
    </div>
  );
};

export default App;
