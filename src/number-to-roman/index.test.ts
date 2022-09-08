import { toRomanNumber } from "./index";

// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

// test(" #1", () => {
//   expect(toRomanNumber(7)).toBe("VII");
// });

test("longest substring #2", () => {
  expect(toRomanNumber(324)).toBe("CCCXXIV");
});

// test("longest substring #3", () => {
//   expect(toRomanNumber(3321)).toBe("MMMCCCXXI");
// });
