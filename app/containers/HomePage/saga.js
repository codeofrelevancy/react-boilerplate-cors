/**
 * Gets the cryptos from Binance
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import request, { serialize } from 'utils/request';

import { loadCryptosSuccessAction, loadCryptosErrorAction } from './actions';
import { LOAD_CRYPTOS_ACTION, CRYPTO_SYMBOLS } from './constants';

/**
 * Binance cryptos request/response handler
 */
export function* getCryptos() {
  const params = {
    symbols: JSON.stringify(CRYPTO_SYMBOLS),
  };
  const requestURL = `/api/v3/ticker/24hrs?${serialize(params)}`;

  try {
    // Call our request helper (see 'utils/request')
    const cryptos = yield call(request, requestURL);
    yield put(loadCryptosSuccessAction(cryptos));
  } catch (err) {
    yield put(loadCryptosErrorAction(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchActions() {
  // Watches for LOAD_CRYPTOS_ACTION actions and calls getCryptos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_CRYPTOS_ACTION, getCryptos);
}
