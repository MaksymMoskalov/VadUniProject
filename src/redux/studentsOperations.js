import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestAllStatements,
  addStatement,
  deleteStatement,
} from 'service/studentsAPI';

export const allStatementsThunk = createAsyncThunk(
  'students/allStatements',
  async (_, thunkAPI) => {
    try {
      const data = await requestAllStatements();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addStatementThunk = createAsyncThunk(
  'students/addStatement',
  async (student, thunkAPI) => {
    try {
      const data = await addStatement(student);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteStatementThunk = createAsyncThunk(
  'students/deleteStatement',
  async (id, thunkAPI) => {
    try {
      const data = await deleteStatement(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
