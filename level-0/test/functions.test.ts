import { minimal, penjumlahanBilangan, power } from "../src/minimal";

describe("Functions Test", function () {
  it("test Function minimal", function () {
    expect(minimal(1, 4)).toBe(1);
    expect(minimal(3, 2)).toBe(2);
    expect(minimal(3, 3)).toBe(3);
  });
  it("test power Function", function () {
    expect(power(7, 3)).toBe(343);
    expect(power(3, 3)).toBe(27);
    expect(power(4, 0.5)).toBe(2);
  });
  it("test penjumlahanBilangan Function", function () {
    expect(penjumlahanBilangan([1, 2, 3], "ganjil")).toBe(4);
    expect(penjumlahanBilangan([1, 2, 3, 4, 5, 6, 7], "genap")).toBe(12);
    expect(penjumlahanBilangan([1, 2, 3, 4, 5], "ganjil")).toBe(9);
  });
});
