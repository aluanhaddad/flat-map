import '../src/index';
const xs = [0, 1, 2, 3];
xs.flatMap(x => [x]).filter(x => x + 1);

const ys: string[] = [1].flatMap(x => [(x + 1).toString()]);

[1, 2, 3, [1, 2, 3]].flatten().map(x => x);

const zs: number[] = [1, [[[[[[[[[[[[[[[[[[[[[2]]]]]]]]]]]]]]]]]]]]], [[1, 2], [3, 4]], [1], [1, 3, 4, 3], [1, [1, [2, [2, [[[[8]]]]]]]]].flatten();
