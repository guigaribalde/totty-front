export const nameShortner = (name: string, limit: number): string => {
  if (name.length > limit) {
    return `${name.substring(0, limit - 2)}...`
  }
  return name
}
