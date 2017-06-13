
import flatMap from './index';

if (!Object.prototype.hasOwnProperty.call(Array.prototype, 'flatMap')) {
  Array.prototype.flatMap = flatMap
}