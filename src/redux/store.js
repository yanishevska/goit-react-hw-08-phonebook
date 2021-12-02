import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from "./contacts/contacts-reducer";
import {
  persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from "./auth";

const middleware = [
    ...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }),
  logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

 export const store = configureStore({
   reducer: {
     auth: persistReducer(authPersistConfig, authReducer),
     contacts: rootReducer,

    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
 });

 
export const persistor = persistStore(store);
