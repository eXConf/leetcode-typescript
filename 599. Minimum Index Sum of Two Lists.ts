function findRestaurant(list1: string[], list2: string[]): string[] {
  const maxLength = Math.max(list1.length, list2.length);
  const map = new Map<string, number[]>();

  for (let i = 0; i < maxLength; i++) {
    const restaurants = [list1[i], list2[i]];
    for (let r of restaurants) {
      if (r === undefined) continue;

      if (!map.has(r)) {
        map.set(r, [i, 0]);
      } else {
        const arr = map.get(r)!;
        arr[0] += i;
        arr[1] = 1;
      }
    }
  }

  let result = [] as string[];
  let max = Number.POSITIVE_INFINITY;

  for (let [k, v] of map) {
    const hasPair = !!v[1];
    const sum = v[0];

    if (!hasPair) continue;

    if (sum < max) {
      max = sum;
      result = [k];
    } else if (sum === max) {
      result.push(k);
    }
  }
  return result;
}

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    [
      'Piatti',
      'The Grill at Torrey Pines',
      'Hungry Hunter Steakhouse',
      'Shogun',
    ],
  ),
); // [ 'Shogun' ]
console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KFC', 'Shogun', 'Burger King'],
  ),
); // [ 'Shogun' ]
console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KFC', 'Burger King', 'Tapioca Express', 'Shogun'],
  ),
); // [ 'Shogun', 'KFC', 'Tapioca Express', 'Burger King' ]
