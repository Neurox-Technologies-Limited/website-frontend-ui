import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { GradientMesh } from "../GradientMesh";

describe("GradientMesh", () => {
  it("renders with default gradient-mesh-bg class", () => {
    const { container } = render(
      <GradientMesh>
        <p>child</p>
      </GradientMesh>,
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain("gradient-mesh-bg");
    expect(root.textContent).toBe("child");
  });

  it("merges custom className", () => {
    const { container } = render(
      <GradientMesh className="extra-class">x</GradientMesh>,
    );
    expect((container.firstChild as HTMLElement).className).toContain("extra-class");
  });
});
