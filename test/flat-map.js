import test from 'tape';
import '../src/shim';
import '../src/flatten/shim';

test('flatMap must apply the specified projection to each element of the resuling array', ({deepEqual, end}) => {
  const xs = [[1, 5, 8], [2, 3]];

  const expected = [2, 6, 9, 3, 4];
  const actual = xs.flatMap(x => x.map(y => y + 1));

  deepEqual(actual, expected);
  end();
});
