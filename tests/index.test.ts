import { add } from "../src";

describe("Test 'add' function", () => {
  test("add of 2 and 8", () => {
    expect(add(2, 8)).toBe(10);
  });
});
