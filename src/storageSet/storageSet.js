import LZString from 'lz-string';

/**
 * Stores data to the local storage.
 *
 * @module Storage
 * @name storageSet
 * @param {String} key name of the entry
 * @param {*} data data to store in the local storage
 * @example
 *
 * storageSet('key', data);
 */
const storageSet = (key, data) => window.localStorage.storageSet(key, LZString.compress(JSON.stringify(data)));

export default storageSet;
