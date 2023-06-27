// import { statusFilters } from './constants';
// import { addContacts, deleteContacts, filterContacts } from './actions';
// import { createReducer } from '@reduxjs/toolkit';

// //contacts initial state object
// const contactsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// //modified for contacts
// // export const contactsReducer = (state = contactsInitialState, action) => {
// //   switch (action.type) {
// //     case 'contacts/addContacts':
// //       return [...state, action.payload];
// //     case 'contacts/deleteContacts':
// //       return state.filter(contacts => contacts.id !== action.payload);
// //     case 'contacts/filterContacts':
// //       return state.filter(contacts =>
// //         contacts.name.toLowerCase().includes(action.payload.toLowerCase())
// //       );
// //     default:
// //       return state;
// //   }
// // };

// export const contactsReducer = createReducer(contactsInitialState, {
//     [addContacts]: (state, action) => {
//         return [...state, action.payload]
//     },

//     [deleteContacts]: (state, action) => {
//         return state.filter(contacts => contacts.id !== action.payload)
//     },

//     [filterContacts]: (state, action) => {
//         return state.filter(contacts => contacts.name.toLowerCase().includes(action.payload.toLowerCase()));
//     },
// })

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };
