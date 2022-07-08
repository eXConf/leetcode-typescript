class MyCircularDeque {
  start: ListNode | null;
  end: ListNode | null;
  size: number;
  maxSize: number;

  constructor(k: number) {
    this.start = null;
    this.end = null;
    this.size = 0;
    this.maxSize = k;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false;

    if (this.start === null) {
      this.start = new ListNode(value);
      this.end = this.start;
      this.size++;
      return true;
    }

    const newNode = new ListNode(value);
    newNode.next = this.start;
    this.start = newNode;
    this.size++;
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false;

    if (this.end === null) {
      return this.insertFront(value);
    }

    this.end.next = new ListNode(value);
    this.end = this.end.next;
    this.size++;
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false;

    this.start = this.start!.next;
    if (!this.start) this.end = null;
    this.size--;
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    if (!this.start!.next) {
      this.deleteFront();
      this.end = null;
      return true;
    }

    let current = this.start;
    while (current!.next!.next) {
      current = current!.next;
    }
    current!.next = null;
    this.end = current;
    this.size--;
    return true;
  }

  getFront(): number {
    return this.start === null ? -1 : this.start.val;
  }

  getRear(): number {
    return this.end === null ? -1 : this.end.val;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  isFull(): boolean {
    return this.size === this.maxSize;
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
