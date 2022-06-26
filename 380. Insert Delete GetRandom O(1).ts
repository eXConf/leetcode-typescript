class RandomizedSet {
  map: Map<number, number>;
  list: number[];
  constructor() {
    this.map = new Map();
    this.list = [];
  }

  #swap(a: number, b: number): void {
    [this.list[a], this.list[b]] = [this.list[b], this.list[a]];
  }

  insert(val: number): boolean {
    if (this.map.has(val)) return false;
    this.map.set(val, this.list.length);
    this.list.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) return false;
    const idx = this.map.get(val)!;
    this.#swap(idx, this.list.length - 1);
    this.list.pop();
    this.map.set(this.list[idx], idx);
    this.map.delete(val);
    return true;
  }

  getRandom(): number {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
