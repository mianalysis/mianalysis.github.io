export function uniqueBy<T>(items: T[], key: keyof T): T[] {
  return [...new Map(items.map((item) => [item[key], item])).values()];
}

export function unique<T>(items: T[]): T[] {
  return [...new Set(items)];
}

export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
  let timeout: NodeJS.Timeout;

  return ((...args: any[]) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  }) as T;
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const partition = <T>(array: T[], predicate: (element: T) => boolean): [T[], T[]] => {
  return array.reduce(
    ([pass, fail], element) => {
      predicate(element) ? pass.push(element) : fail.push(element);

      return [pass, fail];
    },
    [[] as T[], [] as T[]]
  );
};

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
