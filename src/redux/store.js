import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { studentReducer } from './studentsReduser';
import { adminReducer } from './adminReduser';

const AdminConfig = {
  key: 'admin',
  version: 1,
  storage,
  whitelist: ['isAdmin'],
};

const rootReducer = combineReducers({
  admin: persistReducer(AdminConfig, adminReducer),
  statement: studentReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
