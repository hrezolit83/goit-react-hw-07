import "./App.css";
import { useSelector } from "react-redux";
import ContactForm from "../contact-form/ContactForm";
import SearchBox from "../search-box/SearchBox";
import ContactList from "../contact-list/ContactList";

function App() {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}

export default App;
