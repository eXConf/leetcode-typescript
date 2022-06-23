class SeatManager {
  list: number[];

  constructor(n: number) {
    this.list = Array(n)
      .fill(null)
      .map((_, idx) => n - idx);
  }

  reserve(): number {
    return this.list.pop()!;
  }

  unreserve(seatNumber: number): void {
    for (let i = this.list.length - 1; i >= 0; i--) {
      if (seatNumber === this.list[i]) return;
      if (seatNumber < this.list[i]) {
        this.list.splice(i + 1, 0, seatNumber);
        return;
      }
    }
    this.list.unshift(seatNumber);
  }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
