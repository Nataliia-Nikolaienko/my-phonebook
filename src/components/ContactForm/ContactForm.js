import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

import css from './ContactForm.module.css';

const ContactForm = ({ isShowing, hide, onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleClick = e => {
    onClose(e);
  };

  const handleKeydown = e => {
    onClose(e);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });

  const formatTel = () => {
    const phoneLength = number.length;
    if (phoneLength < 7) {
      return `(${number.slice(0, 3)}) ${number.slice(3)}`;
    }
    return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(
      6,
      8
    )}-${number.slice(8, 10)}`;
  };

  const addSingleContact = ({ name, number }) => {
    const nameContact = contacts.find(contact => contact.name === name);
    const numberContact = contacts.find(contact => contact.number === number);
    if (nameContact) {
      return alert(`${name} is already in contacts.`);
    } else if (numberContact) {
      return alert(`${number} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addSingleContact({ name, number: formatTel() });
    setName('');
    setNumber('');
  };

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return isShowing
    ? createPortal(
        <>
          <div className={css.overlay} onClick={handleClick}>
            <div className={css.formWrapper}>
              <button
                type="button"
                className={css.modalCloseBtn}
                onClick={hide}
              >
                x
              </button>
              <form onSubmit={handleSubmit} className={css.form}>
                <h1 className={css.phonebookTitle}>Please add your contacts</h1>
                <div className={css.nameInputContainer}>
                  <input
                    className={css.input}
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                  />
                </div>
                <div className={css.telWrapper}>
                  <input
                    className={css.input}
                    name="number"
                    type="tel"
                    placeholder="Number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    required
                  />
                </div>
                <button type="submit" className={css.btnCreate}>
                  Add contact
                </button>
              </form>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
};

export default ContactForm;
