import { useState } from 'react';
import styled from './phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { fetchContacts, postContacts } from 'redux/operations';
import { Button, Input } from '@mui/material';

//A function that adds a user into the contact list
export default function Phonebook() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  // console.log(props)
  //set state for individual user information (id, name, number)
  const [userData, setUserData] = useState({
    id: null,
    name: '',
    number: '',
  });



  //change handler
  function userChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  }

  //submit form handler - checks whether contact is already listed
  function submitHandler(event) {
    event.preventDefault();
    let isThere = false;
    const fullContactList = contacts;
    fullContactList.map(data => {
      // console.log(data.name)
      if (data.name === userData.name) {
        isThere = true;
        return alert(`${userData.name} is already in contacts`);
      }
      return null;
    });
    if (isThere === false) {
        // add my data to my form 
      dispatch(postContacts(userData)).then(() => {
        dispatch(fetchContacts());
      });
    }
    setUserData({
      ...userData,
      name: '',
      number: '',
    });
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const form = event.target;
  //   dispatch(addContacts(form.elements.text.value))
  //   form.reset();
  // }

  return (
    <form className={styled.phonebook_form} onSubmit={submitHandler}>
      <div fixed className={styled.phonebook_container}>
        <label htmlFor="name" className={styled.name_label}>
          Name
        </label>
        <Input id="component-simple" defaultValue="Composed TextField"
          size="small"
          className={styled.name_input}
          type="text"
          value={userData.name}
          name="name"
          onChange={userChangeHandler}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
        />
        <label className={styled.number_label}>Number</label>
        <Input
          inputProps={{ inputMode: 'numeric' }} 
          size="small"
          className={styled.number_input}
          type="tel"
          name="number"
          value={userData.number}
          onChange={userChangeHandler}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <div className={styled.button_div}>
          <Button variant='contained' className={styled.addcontact_button} type="submit">
            Add contact
          </Button>
        </div>
      </div>
    </form>
  );
}
