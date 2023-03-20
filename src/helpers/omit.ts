export function omit<T extends object, K extends keyof T>(obj: T, props: K[]): Omit<T, K> {
  const result = { ...obj };

  props.forEach(function(prop) {
    delete result[prop];
  });

  return result;
}
