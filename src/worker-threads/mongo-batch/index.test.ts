const { users } = require("./db");
import { populateWithThreads } from "./index";

test("should insert 1k documents", async () => {
  await populateWithThreads();
  const count = await users.countDocuments();
  expect(count).toBe(12000);
});
