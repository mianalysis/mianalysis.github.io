export function uniqueBy<T>(items: T[], key: keyof T): T[] {
  return [...new Map(items.map((item) => [item[key], item])).values()];
}

export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
