import { deleteContacts } from 'redux/operations';
import styled from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Filter() {
  // const [search, setSearch] = useState('');
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  // console.log(contact);

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

  function getFilteredContacts(event) {
    dispatch(filterContacts(event.target.value));
  }
  // const filtered = !search
  //   ? contacts
  //   : contacts.filter(contact => {
  //       return contact.name.toLowerCase().includes(search.toLowerCase());
  //     });

  const getVisibleContacts = () => {
    const normalizeFilter = filter.trim().toLowerCase();
    return contacts.filter(contact =>
      // only add data into array, where the name has any character of filtered text
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  // function handleDelete(event) {
  //   // console.log(event)
  //   // const idToPop = props.contacts.filter(thisContact => {
  //   //   return thisContact.id !== event.id;
  //   // });
  //   // // console.log(idToPop)
  //   // props.setContacts(idToPop)
  //   dispatch(deleteContacts(id))
  // }

  function handleDelete(id) {
    // delete the content
    dispatch(deleteContacts(id)).then(() => {
      // then, refetch our data from our database (use this method when you don't have to make a lot of fetch calls)
      dispatch(fetchContacts());
    });
  }

  return (
    contacts.length > 0 && (
      <div className={styled.filter_container}>
        <label className={styled.search_title}>Find contacts by name</label>
        <TextField
          label='Search phonebook'
          variant='standard'
          className={styled.filter_input}
          type="text"
          value={filter}
          onChange={getFilteredContacts}
        />
        <ul className={styled.contact_list}>
          {visibleContacts.map(contact => {
            return (
              <li key={contact.id} className={styled.list_items}>
                {contact.name}: {contact.phone}
                <div className={styled.button_div}>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    type="submit"
                    className={styled.delete_button}
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </Button>
                  </div>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}
