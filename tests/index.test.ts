import { add, substract, times, divide } from "../src";

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

describe("Test 'subtract' function", () => {
  test("subtract of 2 and 2", () => {
    expect(substract(2, 2)).toBe(0);
  });

  test("subtract of 5 and 3", () => {
    expect(substract(5, 3)).toBe(2);
  });

  test("subtract of 4 and 6", () => {
    expect(substract(4, 6)).toBe(-2);
  });
});

describe("Test 'times' function", () => {
  test("times of 2 and 2", () => {
    expect(times(2, 2)).toBe(4);
  });

  test("times of 3 and 4", () => {
    expect(times(3, 4)).toBe(12);
  });

  test("times of 5 and 10", () => {
    expect(times(5, 10)).toBe(50);
  });
});

describe("Test 'divide' function", () => {
  test("divide of 7 and 7", () => {
    expect(divide(7, 7)).toBe(1);
  });

  test("divide of 8 and 2", () => {
    expect(divide(8, 2)).toBe(4);
  });

  test("divide of 10 and 2", () => {
    expect(divide(10, 2)).toBe(5);
  });
});
