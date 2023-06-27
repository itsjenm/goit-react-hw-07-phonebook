import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer, filtersReducer} from './reducer';
import contactsReducer from './contactsSlice';
// import filterReducer from './filterSlice';


export default configureStore({
    reducer: contactsReducer,
    
});