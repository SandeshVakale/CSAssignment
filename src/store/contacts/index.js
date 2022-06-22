import {createAction, createReducer} from '@reduxjs/toolkit';
import contacts from '../contacts';
const initialState = {
    contacts: contacts,
};

const getContacts = createAction('contacts/getContacts');

export const contactsModel = createReducer(initialState, builder => {
    builder.addCase(getContacts, state => state.contacts);
});
