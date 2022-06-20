export class TrieNode {
  children: Map<string, TrieNode>;
  isWordEnd: boolean;
  constructor(children = new Map<string, TrieNode>(), isWordEnd = false) {
    this.children = children;
    this.isWordEnd = isWordEnd;
  }
}

function minimumLengthEncoding(words: string[]): number {
  const root = new TrieNode();
  let count = 0;

  for (let word of words) {
    let current = root;

    for (let i = word.length - 1; i >= 0; i--) {
      if (!current.children.has(word[i])) {
        current.children.set(word[i], new TrieNode());
      }
      current = current.children.get(word[i])!;

      if (i === word.length - 1) {
        current.isWordEnd = true;
      }
    }
  }

  function dfs(node: TrieNode, word = '') {
    if (node.children.size === 0) count += word.length + 1;

    for (let [k, v] of node.children) {
      dfs(v, word + k);
    }
  }

  dfs(root);

  return count;
}

console.log(minimumLengthEncoding(['time', 'me', 'bell'])); // 10
console.log(minimumLengthEncoding(['t'])); // 10
