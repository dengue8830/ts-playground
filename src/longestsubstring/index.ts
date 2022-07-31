function maxLength(tries: string[]) {
  return tries.map((item) => item.length).sort((a, b) => b - a)[0];
}

export function lengthOfLongestSubstring(s: string): number {
  const tries: string[] = [""];
  let head = 0;
  for (let i = 0; i < s.length; ) {
    const char = s[i];
    const last = tries.length - 1;
    if (tries[last].includes(char)) {
      tries.push("");
      head++;
      i = head;
    } else {
      tries[last] += char;
      i++;
    }
  }

  return maxLength(tries);
}
