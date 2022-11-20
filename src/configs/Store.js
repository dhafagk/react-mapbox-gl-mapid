import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import * as Configs from "./index";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [Configs.GetApi],
};

const persistedReducer = persistReducer(persistConfig, Configs.themeReducer);

let Store = configureStore({
  reducer: {
    token: Configs.tokenReducer,
    dataApi: Configs.dataReducer,
    isDarkMode: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let PersistedStore = persistStore(Store);

export { Store, PersistedStore };
