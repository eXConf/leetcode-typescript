function calculateTax(brackets: number[][], income: number): number {
  let i = 0;
  let sumToPay = 0;

  while (i < brackets.length && income > 0) {
    let amount = brackets[i][0] - (i > 0 ? brackets[i - 1][0] : 0);
    amount = amount <= income ? amount : income;
    const tax = amount * (brackets[i][1] / 100);
    income -= amount;
    sumToPay += tax;
    i++;
  }

  return sumToPay;
}

console.log(
  calculateTax(
    [
      [3, 50],
      [7, 10],
      [12, 25],
    ],
    10,
  ),
); // 2.65000
console.log(
  calculateTax(
    [
      [1, 0],
      [4, 25],
      [5, 50],
    ],
    2,
  ),
); // 0.25000
console.log(calculateTax([[2, 50]], 0)); // 0
