import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default localStorage

const persistConfig = {
  key: 'root', // Key for the localStorage entry
  storage, // Use localStorage for persistence
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: { contacts: persistedContactsReducer, filter: filterReducer },
});

export const persistor = persistStore(store);
