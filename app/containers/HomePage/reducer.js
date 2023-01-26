/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_CRYPTOS_ACTION,
  LOAD_CRYPTOS_SUCCESS_ACTION,
  LOAD_CRYPTOS_ERROR_ACTION,
} from './constants';

// The initial state of the App
export const initialState = {
  cryptos: false,
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_CRYPTOS_ACTION:
        draft.loading = true;
        draft.error = null;
        break;

      case LOAD_CRYPTOS_SUCCESS_ACTION:
        draft.cryptos = action.cryptos;
        draft.loading = false;
        break;

      case LOAD_CRYPTOS_ERROR_ACTION:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default homeReducer;
