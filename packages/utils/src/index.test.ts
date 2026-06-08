import { describe, expect, it } from "vitest";
import { cn, formatCurrency } from "@halort/utils";

describe("@halort/utils", () => {
  it("merges class names", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("formats currency", () => {
    expect(formatCurrency(150000)).toContain("150");
  });
});
