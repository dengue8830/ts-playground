import { splitWorkWithThreads } from "./index";

// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

test("should resolve the sum", async () => {
  const array = [1, 2, 3, 4, 5, 6];
  expect(await splitWorkWithThreads(array)).toBe(21);
});
