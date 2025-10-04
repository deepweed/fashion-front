export const formatBrandName = (brand: string) =>
  brand.length <= 3
    ? brand.toUpperCase()
    : brand
        .toLowerCase()
        .split("_")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
