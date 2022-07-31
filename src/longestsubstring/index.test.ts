import { lengthOfLongestSubstring } from "./index";

// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

test("longest substring #1", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

test("longest substring #2", () => {
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});

test("longest substring #3", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});

test("longest substring #4", () => {
  expect(lengthOfLongestSubstring("dvdf")).toBe(3);
});
