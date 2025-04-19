import { createListenerMiddleware } from "@reduxjs/toolkit";
import { ROOT_STORE_TYPE } from "./store";
import { setNotificationData } from "./general.slice";

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
  actionCreator: setNotificationData,
  effect: async (action, listenerApi) => {
    const state = listenerApi.getState();
  },
});

export default listenerMiddleware;
