export function omit<T extends object, K extends keyof T> (obj: T, props: K[]): Omit<T, K> {
  const result = { ...obj }

  props.forEach(function (prop) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete result[prop]
  })

  return result
}
