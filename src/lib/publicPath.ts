/** Prefix a root-absolute path with the Vite base used on GitHub Pages. */
export function publicPath(path: string) {
  if (!path.startsWith("/")) return path
  return `${import.meta.env.BASE_URL}${path.slice(1)}`
}
