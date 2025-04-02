import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../contact-form/ContactForm";
import SearchBox from "../search-box/SearchBox";
import ContactList from "../contact-list/ContactList";
import { fetchContacts } from "../../redux/contactsOps";
import { useEffect } from "react";
import Loader from "../loader/Loader";
import Error from "../error/Error";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const isLoading = useSelector((state) => state.contacts.loading);
  const isError = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && <Loader>Loading message</Loader>}
      {isError && <Error>Error message</Error>}
      <SearchBox />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}

export default App;
