export function lengthOfLongestSubstring(s: string): number {
  let substring = "";
  let maxSubstring = "";
  let head = 0;
  for (let i = 0; i < s.length; ) {
    const char = s[i];
    if (substring.includes(char)) {
      substring = "";
      head++;
      i = head;
    } else {
      substring += char;
      i++;
    }
    if (substring.length > maxSubstring.length) {
      maxSubstring = substring;
    }
  }

  return maxSubstring.length;
}
