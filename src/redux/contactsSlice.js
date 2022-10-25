import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const contactsInitalState = {
    data: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79'  },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
};

const contatsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitalState,
    reducers: {
        addContact: {
            reducer(state, action) {                  
                state.data.unshift(action.payload);          
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.data.findIndex(contact => contact.id === action.payload);
            state.data.splice(index, 1);
        },
    }
})

export const { addContact, deleteContact } = contatsSlice.actions;
export const contactsReducer = contatsSlice.reducer;