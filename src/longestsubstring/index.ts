function maxLength(tries: string[]) {
  return tries.map((item) => item.length).sort((a, b) => b - a)[0];
}

export function lengthOfLongestSubstring(s: string): number {
  const tries: string[] = [""];
  for (const char of s) {
    const last = tries.length - 1;
    if (tries[last].includes(char)) {
      tries.push(char);
    } else {
      tries[last] += char;
    }
  }

  return maxLength(tries);
}
