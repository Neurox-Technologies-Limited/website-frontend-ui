import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Cloud } from "lucide-react";
import { CapabilityCard } from "../CapabilityCard";

describe("CapabilityCard", () => {
  it("renders icon, title, and subtitle", () => {
    render(
      <CapabilityCard icon={Cloud} title="Cloud" subtitle="Scalable, secure" />,
    );
    expect(screen.getByText("Cloud")).toBeInTheDocument();
    expect(screen.getByText("Scalable, secure")).toBeInTheDocument();
  });

  it("applies glass utility class", () => {
    const { container } = render(
      <CapabilityCard icon={Cloud} title="X" subtitle="y" />,
    );
    expect((container.firstChild as HTMLElement).className).toContain("glass");
  });
});
