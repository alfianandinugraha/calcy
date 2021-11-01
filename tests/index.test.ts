import { add } from "../src";

describe("Test 'add' function", () => {
  test("add of 2 and 8", () => {
    expect(add(2, 8)).toBe(10);
  });

  test("add of 2.5 and 2.5", () => {
    expect(add(2.5, 2.5)).toBe(5);
  });

  test("add of 3 and 5", () => {
    expect(add(3, 5)).toBe(8);
  });
});
