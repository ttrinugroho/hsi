export function minimal(a: number, b: number): number {
  return Math.min(a, b);
}

export function power(a: number, b: number): number {
  return a ** b;
}

export function penjumlahanBilangan(
  a: number[],
  b: "ganjil" | "genap",
): number {
  return a
    .filter((val) => (b === "genap" ? val % 2 === 0 : val % 2 !== 0))
    .reduce((prev, curr) => prev + curr);
}
