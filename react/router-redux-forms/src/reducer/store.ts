import { configureStore, Middleware } from "@reduxjs/toolkit";

import { generalReducer } from "./general.slice";
import { authenticationReducer } from "./authentication.slice";
import listenerMiddleware from "./listener";

export const store = configureStore({
  reducer: {
    general: generalReducer,
    auth: authenticationReducer,
  },
  // TODO: fix the below error
  middleware: (getDefaultMiddleware): Middleware[] =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type ROOT_STORE_TYPE = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type ROOT_STORE_DISPATCH_TYPE = typeof store.dispatch;
