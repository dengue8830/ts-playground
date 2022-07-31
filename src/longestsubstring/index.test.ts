import { lengthOfLongestSubstring } from "./index";

test("longest substring #1", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

test("longest substring #2", () => {
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});

test("longest substring #3", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(2);
});
