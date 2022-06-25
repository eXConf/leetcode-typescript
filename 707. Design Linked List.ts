export class MyListNode {
  val: number;
  next: MyListNode | null;
  constructor(val?: number, next?: MyListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class MyLinkedList {
  head: MyListNode | null;
  tail: MyListNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  #getNode(index: number): MyListNode | null {
    if (index < 0 || index >= this.length) return null;
    let i = 0;
    let current = this.head;
    while (i < index && current) {
      current = current.next;
      i++;
    }
    return current;
  }

  get(index: number): number {
    const node = this.#getNode(index);
    if (!node) return -1;
    return node.val;
  }

  addAtHead(val: number): void {
    const next = this.head;
    this.head = new MyListNode(val, next);
    this.length++;
  }

  addAtTail(val: number): void {
    if (this.length === 0) {
      return this.addAtHead(val);
    }
    const node = this.#getNode(this.length - 1);
    if (!node) return;
    node.next = new MyListNode(val);
    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.length) return;
    if (index === this.length) return this.addAtTail(val);
    if (index === 0) return this.addAtHead(val);

    const node = this.#getNode(index - 1);
    if (!node) return;
    node.next = new ListNode(val, node.next);
    this.length++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.length) return;
    if (index === 0 && this.head !== null) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    const node = this.#getNode(index - 1);
    if (!node) return;
    node.next = node.next?.next || null;
    this.length--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
