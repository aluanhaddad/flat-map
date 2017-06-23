import test from 'tape';
import '../src/flatten';

test('flatten with unspecified depth must flatten first level nesting (n = 1)', ({deepEqual, end}) => {
  const xs = [[1, 2, 3], [4, 5, 6]];
  const expected = [1, 2, 3, 4, 5, 6];

  const actual = xs.flatten(1);

  deepEqual(actual, expected);
  end();
});

test('flatten with unspecified depth must flatten second level nesting (n = 2)', ({deepEqual, end}) => {
  const xs = [[1, 2, 3], [4, 5, [6]]];
  const expected = [1, 2, 3, 4, 5, 6];

  const actual = xs.flatten(1);

  deepEqual(actual, expected);
  end();
});

test('flatten must be able to handle nested arrays with element arrays of varying depth', ({deepEqual, end}) => {
  const xs = [1, [[[[[[[[[[[[[[[[[[[[[2]]]]]]]]]]]]]]]]]]]]], [[1, 2], [3, 4]], [1], [1, 3, 4, 3], [1, [1, [2, [2, [[[[8]]]]]]]]];
  const expected = [1, 2, 1, 2, 3, 4, 1, 1, 3, 4, 3, 1, 1, 2, 2, 8];

  const actual = xs.flatten();

  deepEqual(actual, expected);
  end();
});