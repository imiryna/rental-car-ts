import { configureStore } from "@reduxjs/toolkit";
import { advertReducer } from "./advert/advertSlice";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

const persistedReducer = persistReducer(persistConfig, advertReducer);

export const store = configureStore({
  reducer: {
    advert: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
