export function uniqueBy<T>(items: T[], key: keyof T): T[] {
  return [...new Map(items.map((item) => [item[key], item])).values()];
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

export const partition = <T>(array: T[], predicate: (element: T) => boolean) => {
  return array.reduce<T[][]>(
    ([pass, fail], element) => {
      predicate(element) ? pass.push(element) : fail.push(element);

      return [pass, fail];
    },
    [[], []]
  );
};
