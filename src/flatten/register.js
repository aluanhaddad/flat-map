import flatten from './index';

if (!Object.prototype.hasOwnProperty.call(Array.prototype, 'flatten')) {
  Array.prototype.flatten =/**@memberof {Array}*/ flatten;
}