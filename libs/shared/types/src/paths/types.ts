export interface Paths {
  path: string;
  queryKey: string[];
}

export const createPaths = <T extends Record<string, string>>(paths: T) => {
  return Object.fromEntries(
    Object.entries(paths).map(([key, path]) => [
      key,
      {
        path,
        queryKey: [key],
      },
    ])
  ) as Record<keyof T, Paths>;
};
