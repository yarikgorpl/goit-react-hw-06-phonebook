import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
const contactsInitialState = { data: [] };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.data.push(action.payload);
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
      state.data = state.data.filter(contact => contact.id !== contactId);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
