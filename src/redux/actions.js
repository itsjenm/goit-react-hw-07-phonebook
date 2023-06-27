// import { createAction, nanoid } from "@reduxjs/toolkit";

// //createAction used to simplify actions and takes a string describing the type of action as an argument and returns the action generator
// export const addContacts = createAction("contacts/addContacts", text => {
//     return {
//         payload: {
//             text, 
//             id: nanoid(),
//             completed: false,
//         }
//     }
// });

// console.log(addContacts("Learn Redux Toolkit"));

// export const deleteContacts = createAction("contacts/deleteContacts");

// export const filterContacts = createAction("contacts/filterContacts");