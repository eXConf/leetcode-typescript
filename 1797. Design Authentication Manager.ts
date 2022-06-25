class AuthenticationManager {
  tokens: Map<string, number>;
  ttl: number;
  constructor(timeToLive: number) {
    this.tokens = new Map();
    this.ttl = timeToLive;
  }

  generate(tokenId: string, currentTime: number): void {
    this.tokens.set(tokenId, currentTime + this.ttl);
  }

  renew(tokenId: string, currentTime: number): void {
    if (this.tokens.has(tokenId)) {
      const expirationTime = this.tokens.get(tokenId)!;
      if (expirationTime > currentTime) {
        this.tokens.set(tokenId, currentTime + this.ttl);
      }
    }
  }

  countUnexpiredTokens(currentTime: number): number {
    let count = 0;
    for (let [_, v] of this.tokens) {
      if (v > currentTime) count++;
    }
    return count;
  }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
