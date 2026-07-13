import { describe, expect, it } from "vitest";
import { parseStoredWishlist } from "./wishlist-context";

describe("parseStoredWishlist", () => {
  it("returns an empty wishlist for missing or invalid storage", () => {
    expect(parseStoredWishlist(null)).toEqual([]);
    expect(parseStoredWishlist("not-json")).toEqual([]);
    expect(parseStoredWishlist(JSON.stringify({ productIds: ["product-1"] }))).toEqual(
      [],
    );
  });

  it("keeps valid IDs and removes duplicates", () => {
    expect(
      parseStoredWishlist(
        JSON.stringify({
          version: 1,
          productIds: ["product-1", "product-1", "", 42, "product-2"],
        }),
      ),
    ).toEqual(["product-1", "product-2"]);
  });

  it("rejects unsupported storage versions", () => {
    expect(
      parseStoredWishlist(
        JSON.stringify({ version: 2, productIds: ["product-1"] }),
      ),
    ).toEqual([]);
  });
});
