/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_CRYPTOS_ACTION,
  LOAD_CRYPTOS_SUCCESS_ACTION,
  LOAD_CRYPTOS_ERROR_ACTION,
} from './constants';

/**
 * Load the cryptos, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_CRYPTOS_ACTION
 */
export function loadCryptosAction() {
  return {
    type: LOAD_CRYPTOS_ACTION,
  };
}

/**
 * Dispatched when the cryptos are loaded by the request saga
 *
 * @param  {array} cryptos The cryptos data
 *
 * @return {object}      An action object with a type of LOAD_CRYPTOS_SUCCESS_ACTION passing the cryptos
 */
export function loadCryptosSuccessAction(cryptos) {
  return {
    type: LOAD_CRYPTOS_SUCCESS_ACTION,
    cryptos,
  };
}

/**
 * Dispatched when loading the cryptos fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_CRYPTOS_ERROR_ACTION passing the error
 */
export function loadCryptosErrorAction(error) {
  return {
    type: LOAD_CRYPTOS_ERROR_ACTION,
    error,
  };
}
