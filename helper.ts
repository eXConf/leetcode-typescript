export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class MyMaxPriorityQueue {
  list: number[];
  constructor() {
    this.list = [];
  }

  enqueue(val: number) {
    if (this.list.length === 0) {
      this.list.push(val);
    } else {
      for (let i = 0; i < this.list.length; i++) {
        if (val > this.list[i]) {
          this.list.splice(i, 0, val);
          break;
        }
      }
      this.list.push(val);
    }
  }

  dequeue(): number | undefined {
    if (!this.isEmpty()) return this.list.shift();
  }

  isEmpty(): boolean {
    return this.list.length === 0;
  }

  front(): number {
    return this.list[0];
  }
}

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

export function makeListNode(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  let node = new ListNode();

  while (arr.length > 0) {
    node.val = arr.pop()!;

    if (arr.length > 0) {
      const newNode = new ListNode();
      newNode.next = node;
      node = newNode;
    }
  }

  return node;
}

export function printListNode(node: ListNode | null) {
  if (node === null) console.log([]);

  const arr = <number[]>[];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  console.log(arr);
}
