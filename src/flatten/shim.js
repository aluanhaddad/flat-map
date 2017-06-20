import flatten from './index.js';

if (!Object.prototype.hasOwnProperty.call(Array.prototype, 'flatten')) {
  Array.prototype.flatten =/**@memberof {Array}*/ flatten;
}