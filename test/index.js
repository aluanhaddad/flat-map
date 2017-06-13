import test from 'tape';
import './../src/register';
import './../src/flatten/register';

test('flatten with unspecified depth flattens first order nesting', ({deepEqual, end}) => {
  const xs = [[1, 2, 3], [4, 5, 6]];
  const expected = [1, 2, 3, 4, 5, 6];

  const actual = xs.flatten(1);

  deepEqual(actual, expected);
  end();
});

test('', ({deepEqual, end}) => {
  const xs = [[1, 5, 8], [2, 3]];

  const expected = [2, 6, 9, 3, 4
  const actual = xs.flatMap(function (x) {return x.map(y => y + 1);});

  deepEqual(actual, expected);
  end();
});
