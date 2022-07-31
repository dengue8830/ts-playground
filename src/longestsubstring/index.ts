function maxLength(tries: string[][]) {
  return tries.map((item) => item.length).sort((a, b) => a + b)[0];
}

export function lengthOfLongestSubstring(s: string): number {
  const tries: string[][] = [[]];
  for (const char of s) {
    const last = tries.length - 1;
    if (tries[last].includes(char)) {
      tries.push([]);
    } else {
      tries[last].push(char);
    }
  }

  return maxLength(tries);
}
