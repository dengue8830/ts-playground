import { getWinner } from "./index";

// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

test("3 is the winner", () => {
  expect(
    getWinner([
      [1, 1, 2, 3],
      [2, 2, 3, 3, 4, 4],
    ])
  ).toBe(3);
});

test("no winner", () => {
  expect(
    getWinner([
      [1, 1],
      [2, 2],
    ])
  ).toBe(-1);
});
