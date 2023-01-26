/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

/**
 * Serialize params, returning a promise
 *
 * @param  {object} params    The properties we want to pass
 * @param  {string} prefix    The prefix we want to append
 *
 * @return {string}           The serialized string
 */
export function serialize(params, prefix = '') {
  if (!params) return '';
  const query = Object.keys(params).reduce((accum, key) => {
    const value = params[key];
    if (params.constructor === Array) {
      // eslint-disable-next-line no-param-reassign
      key = `${prefix}[]`;
    } else if (params.constructor === Object) {
      // eslint-disable-next-line no-param-reassign
      key = prefix ? `${prefix}[${key}]` : key;
    }

    if (value === undefined) {
      return accum;
    }
    if (typeof value === 'object') {
      const moreParams = serialize(value, key);
      if (moreParams) accum.push(moreParams);
    } else {
      accum.push(`${key}=${encodeURIComponent(value)}`);
    }
    return accum;
  }, []);
  return query.join('&');
}
