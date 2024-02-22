import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "../reducer/goalsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

export const store = configureStore({
  reducer: {
    goals: persistReducer({ key: "goals", storage }, goalsReducer),
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const persistor = persistStore(store);
