import test from 'tape';
import '../src/flat';

test('flatten with depth = 1 must flatten first level nesting (n = 1)', ({deepEqual, end}) => {
  const xs = [[1, 2, 3], [4, 5, 6]];
  const expected = [1, 2, 3, 4, 5, 6];

  const actual = xs.flatten(1);

  deepEqual(actual, expected);
  end();
});

test('flat with depth = 2 must flatten second level nesting (n = 2)', ({deepEqual, end}) => {
  const xs = [[1, 2, 3], [4, 5, [6]]];
  const expected = [1, 2, 3, 4, 5, 6];

  const actual = xs.flat(2);

  deepEqual(actual, expected);
  end();
});

test('flat with depth = 1 must flatten only one level (n = 1)', ({deepEqual, end}) => {
  const xs = [[1, 2, 3], [4, 5, [6]]];
  const expected = [1, 2, 3, 4, 5, [6]];

  const actual = xs.flat(1);

  deepEqual(actual, expected);
  end();
});

