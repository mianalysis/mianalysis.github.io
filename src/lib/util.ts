export function uniqueBy<T>(items: T[], key: keyof T): T[] {
  return [...new Map(items.map((item) => [item[key], item])).values()];
}
