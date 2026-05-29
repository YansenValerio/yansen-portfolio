// Ambient module declarations (no imports → stays global)

declare module "*.css";

declare module "*.glb" {
  const src: string;
  export default src;
}
