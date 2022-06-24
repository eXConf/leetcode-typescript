export class StackNode {
  val: number;
  min: number;
  constructor(val: number, min: number) {
    this.val = val;
    this.min = min;
  }
}

class MinStack {
  stack: StackNode[];

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    let min: number;

    if (this.stack.length === 0) min = val;
    else {
      const lastMin = this.stack[this.stack.length - 1].min;
      min = val < lastMin ? val : lastMin;
    }

    this.stack.push(new StackNode(val, min));
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].min;
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/