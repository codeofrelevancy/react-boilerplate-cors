/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'app/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'app/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_CRYPTOS_ACTION = 'app/HomePage/LOAD_CRYPTOS_ACTION';
export const LOAD_CRYPTOS_SUCCESS_ACTION =
  'app/HomePage/LOAD_CRYPTOS_SUCCESS_ACTION';
export const LOAD_CRYPTOS_ERROR_ACTION =
  'app/HomePage/LOAD_CRYPTOS_ERROR_ACTION';

export const CRYPTO_SYMBOLS = [
  'BTCBUSD',
  'ETHBUSD',
  'BNBBUSD',
  'XRPBUSD',
  'DOGEBUSD',
  'MATICBUSD',
  'SOLBUSD',
  'SHIBBUSD',
  'APEBUSD',
  'NEARBUSD',
  'LUNCBUSD',
  'LUNABUSD',
];
