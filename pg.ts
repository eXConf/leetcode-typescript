// test set.has() speed vs array.indexOf()
function testSetHas() {
  const size = 10 ** 7;
  const arr = Array(size)
    .fill(null)
    .map(_ => Math.floor(Math.random() * size));
  const set = new Set(arr);
  const searchElement = arr[Math.floor(size / 2)];

  console.time('arr');
  arr.indexOf(searchElement);
  console.timeEnd('arr');

  console.time('set');
  set.has(searchElement);
  console.timeEnd('set');
}
// testSetHas();

// test how fast is map.has
function testMapHas() {
  const map = new Map<number, number>();
  const size = 10 ** 6;

  for (let i = 0; i < size; i++) {
    map.set(i, i);
  }

  const searchElement = Math.floor(size / 2);

  console.time('map');
  map.has(888777);
  map.has(8877);
  map.has(87);
  map.has(2);
  map.has(588777);
  console.timeEnd('map');
}

// testMapHas();

// test array.pop() speed vs array.shift()
function testPopShift() {
  const n = 100000;
  const arr1 = Array(n).fill(0);

  console.time('pop');
  while (arr1.length > 0) {
    arr1.pop();
  }
  console.timeEnd('pop');

  const arr2 = Array(n).fill(0);

  console.time('shift');
  while (arr2.length > 0) {
    arr2.shift();
  }
  console.timeEnd('shift');
}
// testPopShift();
