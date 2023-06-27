// import { useSelector } from 'react-redux'
// import styled from './contacts.module.css'
// import { getContacts } from 'redux/selectors';
// import { getFilter } from 'redux/selectors';

// // a function that sorts the users and renders them into contacts
// export default function Contacts() {
//     const contacts =  useSelector(getContacts);
//     const filter = useSelector(getFilter);

//     const getVisibleContacts = () => {
//     const normalizeFilter = filter.trim().toLowerCase(); 
//        return contacts.filter(contact => 
//         contact.name.toLowerCase().includes(normalizeFilter)
//         );
//     };
    
//     const visibleContacts = getVisibleContacts();

//     return (
//         <div>
//             <ul>
//                 {visibleContacts.map((user) => (
//                     <li key={user.id}>
//                         {user.name}: {user.number}
//                         <button type="submit" className={styled.delete_button}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }