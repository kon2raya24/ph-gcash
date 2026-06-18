import { describe, it, expect } from "vitest";
import { formatGCash, validateGCash } from "../index";

describe("GCash Utilities", () => {
  it("should format GCash number", () => {
    expect(formatGCash("09171234567")).toBe("+639171234567");
    expect(formatGCash("639171234567")).toBe("+639171234567");
  });

  it("should validate GCash number", () => {
    expect(validateGCash("09171234567")).toBe(true);
    expect(validateGCash("+639171234567")).toBe(true);
    expect(validateGCash("12345")).toBe(false);
  });
});
