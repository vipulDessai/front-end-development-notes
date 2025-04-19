// import { Dispatch, Middleware } from "@reduxjs/toolkit";
// import { ROOT_STORE_TYPE } from "./store";
// import { setAuthData } from "./authentication.slice";

// type StoreListenerMiddleware = Middleware<
//   {},
//   ROOT_STORE_TYPE,
//   Dispatch<ReturnType<typeof setAuthData>>
// >;

// export const loggerMiddleware: StoreListenerMiddleware =
//   (store) => (next) => (action) => {
//     console.log("will dispatch", action);

//     // Call the next dispatch method in the middleware chain.
//     const returnValue = next(action);

//     console.log("state after dispatch", store.getState());

//     // This will likely be the action itself, unless
//     // a middleware further in chain changed it.
//     return returnValue;
//   };

import { createListenerMiddleware } from "@reduxjs/toolkit";
import { ROOT_STORE_TYPE } from "./store";
import { setAuthData } from "./authentication.slice";

const listenerMiddleware = createListenerMiddleware<ROOT_STORE_TYPE>();

// Listen on all actions
listenerMiddleware.startListening({
  // return true in predicate to trigger effect
  predicate: (action, currentState, previousState) => {
    if (action.type === "rows/fetchCol/rejected") {
      return true;
    }

    return false;
  },
  effect: async (action, listenerApi) => {
    const state = listenerApi.getState();
  },
});

// listen on only setLoading
listenerMiddleware.startListening({
  actionCreator: setAuthData,
  effect: async (action, listenerApi) => {
    const state = listenerApi.getState();
  },
});
