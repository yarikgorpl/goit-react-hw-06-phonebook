import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
const contactsInitialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(nameValue, numberValue) {
        return {
          payload: {
            id: shortid.generate(),
            name: nameValue,
            number: numberValue,
          },
        };
      },
    },
    deleteContact(state, action) {
      const contactId = action.payload;
      return state.filter(contact => contact.id !== contactId);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
