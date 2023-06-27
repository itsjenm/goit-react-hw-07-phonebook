// async operations
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// whenever asyncThunk runs, its going to call some fetching in progress, everything inside the try, is if we're doing a fetch success.
// get from our database
export const fetchContacts = createAsyncThunk('contact/get', async () => {
  try {
    const response = await axios.get(
      `https://649a4e7dbf7c145d0238b54b.mockapi.io/contacts?sortBy=name`
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

// add to the database
export const postContacts = createAsyncThunk('contact/post', async (data) => {
    const newContact = {
        name: data.name,
        phone: data.number,
        createdAt: Date.now(),
    }
    try {
        const response = await axios.post(`https://649a4e7dbf7c145d0238b54b.mockapi.io/contacts`, newContact);
        console.log(response.data);
        return response.data
    } catch (error) {
        return error
    }
});

// delete from the database
export const deleteContacts = createAsyncThunk('contact/delete', async (id) => {
    try {
        const response = await axios.delete(`https://649a4e7dbf7c145d0238b54b.mockapi.io/contacts/${id}`);
        return response.data
    } catch (error) {
        return error
    }
})