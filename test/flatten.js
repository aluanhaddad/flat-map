import test from 'tape';
import '../src/flatten/shim';

test('flatten with unspecified depth must flatten first order nesting', ({deepEqual, end}) => {
  const xs = [[1, 2, 3], [4, 5, 6]];
  const expected = [1, 2, 3, 4, 5, 6];

  const actual = xs.flatten(1);

  deepEqual(actual, expected);
  end();
});