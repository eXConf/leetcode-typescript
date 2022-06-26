class MyCalendar {
  list: number[][];
  constructor() {
    this.list = [];
  }

  book(start: number, end: number): boolean {
    for (let [s, e] of this.list) {
      if (s < end && start < e) return false;
    }
    this.list.push([start, end]);
    return true;
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
