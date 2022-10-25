import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6357b022c26aac906f2fe922.mockapi.io';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.massage)
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({ name, phone}, thunkAPI) => {
        try {
            const { data } = await axios.post('/contacts', { name, phone});
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.massage)
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/contacts/${id}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.massage)
        }
    }
);