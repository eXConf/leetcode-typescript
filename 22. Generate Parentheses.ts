function generateParenthesis(n: number): string[] {
  const combos: string[] = [];

  function dp(arr: number[], s: string) {
    if (arr[0] === 0 && arr[1] === 0) combos.push(s);

    if (arr[0] > 0) dp([arr[0] - 1, arr[1]], s + '(');
    if (arr[1] > arr[0]) dp([arr[0], arr[1] - 1], s + ')');
  }

  dp([n, n], '');
  return combos;
}

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
