// used to create reducer
import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";
import { postContacts } from "./operations";
import { deleteContacts } from "./operations";

const contactsInitialState = {
    contacts: {
      items: [],
      isLoading: false,
      error: null
    },
    filter: "",
  }

//action types
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        // addContacts: {
        //     reducer(state, action) {
        //     state.push(action.payload);
        //     },
        //     prepare(name, number) {
        //         return {
        //             payload: { 
        //                 id: nanoid(),
        //                 name,
        //                 number,
        //             },
        //         };
        //     },
        // },
        // deleteContacts(state, action) {
        //     const index = state.findIndex(contact => contact.id === action.payload);
        //     state.splice(index, 1);
        // },
        filterContacts(state, action) {
           state.filter = action.payload;
        },
    },
    // The extraReducers property is used to declare reducers for "external" action types, that is, those not generated from the reducers property.
    // Async actions 
    extraReducers: builder => {
        // get the data
        builder.addCase(fetchContacts.pending, state => {
            // do something
            state.contacts.isLoading = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.contacts.isLoading = false;
            console.log(action.payload)
            state.contacts.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.contacts.error = action.payload;
            state.contacts.isLoading = false;
        })
        // add Contact 
        .addCase(postContacts.pending, state => {
            // do something
            state.contacts.isLoading = true;
        })
        .addCase(postContacts.fulfilled, (state, action) => {
            state.contacts.isLoading = false;
            // state.contacts.items.push(action.payload);
            console.log(action.payload)
            // state.contacts.items = action.payload;
        })
        .addCase(postContacts.rejected, (state, action) => {
            state.contacts.error = action.payload;
            state.contacts.isLoading = false;
        })
        // delete contacts 
        .addCase(deleteContacts.pending, state => {
            // do something
            state.contacts.isLoading = true;
        })
        .addCase(deleteContacts.fulfilled, (state, action) => {
            state.contacts.isLoading = false;
            // state.contacts.items.push(action.payload);
            console.log(action.payload)
            // state.contacts.items = action.payload;
        })
        .addCase(deleteContacts.rejected, (state, action) => {
            state.contacts.error = action.payload;
            state.contacts.isLoading = false;
        })
    }
});


//action generators 
export const { filterContacts } = contactsSlice.actions;

//slide reducer
export default contactsSlice.reducer; 
