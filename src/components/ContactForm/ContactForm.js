import { useState } from "react";
import shortid from "shortid";
import s from "./ContactForm.module.css";
import { useSelector,useDispatch } from "react-redux";
import {  getContacts} from "../../redux/contacts/contacts-selector";
import { addContactEl } from '../../redux/contacts/contacts-operation';
// import { useState } from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';


function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;
      default:
        return;
    }

  };

  const handleSubmit = e => {
    e.preventDefault();
    formSubmitHandler({ name, number, id: contactInputId });

    reset();
  };


  const formSubmitHandler = item => {
  
    const normalizedName = item.name.toLowerCase();
    contacts.find(el => { return el.name.toLowerCase() === normalizedName }
    )
      ? alert(`${item.name} is already in contacts`)
      : contacts.find(
        el => { return el.number.toLowerCase() === item.number },
      )
        ? alert(`${item.number} is already in contacts`)
        : dispatch(addContactEl({ name, number })); 
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>

      <label htmlFor={contactInputId} className={s.labelForm}>
        Name
      </label>

      <input
        className={s.formInput}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        id={contactInputId}
        required
      />

      <label htmlFor={contactInputId} className={s.labelForm}>
        {" "}
        Number
      </label>

      <PhoneInput
        className={s.formInput}
        value={number}
        id={contactInputId}
        onChange={setNumber}
      />
 
      <div className="frame">
        <div className={s.btnList} >
          
          <button type="submit" className={s.btn12}>
            <span>Add contact</span>
            <span>Add contact</span>
          </button></div></div>
    </form>
  );
};


export default ContactForm;

