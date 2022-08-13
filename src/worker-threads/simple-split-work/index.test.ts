import { splitWorkWithThreads } from "./index";

test("should resolve the sum", async () => {
  const array = [1, 2, 3, 4, 5, 6];
  expect(await splitWorkWithThreads(array)).toBe(21);
});
