// Raw SVG imports (Vite ?raw, inlined as strings at build time).
declare module "*.svg?raw" {
  const content: string;
  export default content;
}
