import test from 'tape';
import '../src/flat-map';

test('flatMap must apply the specified projection to each element of the resulting array', ({deepEqual, end}) => {
  const xs = [[1, 5, 8], [2, 3]];

  const expected = [2, 6, 9, 3, 4];
  const actual = xs.flatMap(x => x.map(y => y + 1));

  deepEqual(actual, expected);
  end();
});

test('flatMap must raise a `TypeError` exception if no callback is specified', ({throws, end}) => {
  throws(() => {
    [].flatMap();
  }, TypeError);
  end();
});

test('flatMap must raise a `TypeError` exception if callback is not callable', ({throws, end}) => {
  throws(() => {
    [].flatMap({});
  }, TypeError);

  end();
});
