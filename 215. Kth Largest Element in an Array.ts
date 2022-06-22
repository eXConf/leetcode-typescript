class MyMinPriorityQueue {
  list: number[];
  constructor() {
    this.list = [];
  }

  enqueue(val: number) {
    if (this.isEmpty()) {
      this.list.push(val);
    } else {
      for (let i = 0; i < this.list.length; i++) {
        if (val > this.list[i]) {
          this.list.splice(i, 0, val);
          return;
        }
      }
      this.list.push(val);
    }
  }

  dequeue(): number | undefined {
    if (!this.isEmpty()) return this.list.pop();
  }

  isEmpty(): boolean {
    return this.list.length === 0;
  }

  front(): number {
    return this.list[this.list.length - 1];
  }

  size(): number {
    return this.list.length;
  }
}

function findKthLargest(nums: number[], k: number): number {
  const heap = new MyMinPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    if (heap.size() < k) {
      heap.enqueue(nums[i]);
    } else {
      if (nums[i] > heap.front()) {
        heap.dequeue();
        heap.enqueue(nums[i]);
      }
    }
  }

  return heap.front();
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
