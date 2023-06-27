import { deleteContacts } from 'redux/contactsSlice';
import styled from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

export default function Filter() {
  // const [search, setSearch] = useState('');
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  // console.log(contact);
 
  function getFilteredContacts(event) {
    dispatch(filterContacts(event.target.value));
  };
  // const filtered = !search
  //   ? contacts
  //   : contacts.filter(contact => {
  //       return contact.name.toLowerCase().includes(search.toLowerCase());
  //     });

  
  const getVisibleContacts = () => {
    const normalizeFilter = filter.trim().toLowerCase(); 
       return contacts.filter(contact => 
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
    

  return (
    contacts.length > 0 && (
      <div className={styled.filter_container}>
      <label className={styled.search_title}>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={getFilteredContacts}
      />
      <ul>
        {visibleContacts.map(contact => {
          return (
            <li key={contact.id} className={styled.list_items}>
              {contact.name}: {contact.number}
              <button
                type="submit"
                className={styled.delete_button}
                onClick={() => dispatch(deleteContacts(contact.id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
    )
  );
}
