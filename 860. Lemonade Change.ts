function lemonadeChange(bills: number[]): boolean {
  const cashBills = {
    5: 0,
    10: 0,
    20: 0,
  };

  for (let bill of bills) {
    let current = bill;
    while (current >= 15 && cashBills[10] > 0) {
      cashBills[10]--;
      current -= 10;
    }

    while (current >= 10) {
      cashBills[5]--;
      current -= 5;
    }

    if (cashBills[5] < 0) {
      return false;
    }

    if (bill === 5) cashBills[5]++;
    if (bill === 10) cashBills[10]++;
    if (bill === 20) cashBills[20]++;
  }

  return true;
}

console.log(lemonadeChange([5, 5, 5, 10, 20])); // true
console.log(lemonadeChange([5, 5, 10, 10, 20])); // false
console.log(
  lemonadeChange([
    5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5,
  ]),
); // true
