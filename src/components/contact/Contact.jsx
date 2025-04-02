import css from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa6";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const hendleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      <p>
        <FaUser className={css.icon} />
        {contact.name}
      </p>

      <p>
        <FaPhone className={css.icon} />
        {contact.number}
      </p>
      <button className={css.btn} type="button" onClick={hendleDeleteContact}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
