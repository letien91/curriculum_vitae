export type PrintImageMode = "full" | "none";

export function printPagePath(mode: PrintImageMode = "full"): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const query = mode === "none" ? "?images=none" : "";
  return `${basePath}/print${query}`;
}
