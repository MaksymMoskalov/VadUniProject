import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  allStatementsThunk,
  addStatementThunk,
  deleteStatementThunk,
} from './studentsOperations';
import Notiflix from 'notiflix';

const INITIAL_STATE = {
  statements: [],
  isLoading: false,
  error: null,
  filter: [1, 6],
};

const studentSlice = createSlice({
  name: 'statements',
  initialState: INITIAL_STATE,
  reducers: {
    handlFiltration(state, action) {
      state.filter = [action.payload.start, action.payload.end];
    },
  },
  extraReducers: builder =>
    builder
      .addCase(allStatementsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.statements = action.payload;
        state.error = null;
      })
      .addCase(addStatementThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.statements.push(action.payload);
        Notiflix.Notify.success('Заява успішно відправлена');
        state.error = null;
      })
      .addCase(deleteStatementThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.statements = state.statements.filter(
          statement => statement.id !== action.payload.id
        );
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          allStatementsThunk.pending,
          addStatementThunk.pending,
          deleteStatementThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          allStatementsThunk.rejected,
          addStatementThunk.rejected,
          deleteStatementThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const { handlFiltration } = studentSlice.actions;
export const studentReducer = studentSlice.reducer;
