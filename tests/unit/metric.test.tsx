import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Metric } from "@/components/composed/metric";

describe("Metric", () => {
  it("renders the value and label", () => {
    render(<Metric value="1M+" label="users served" />);
    expect(screen.getByText("1M+")).toBeInTheDocument();
    expect(screen.getByText("users served")).toBeInTheDocument();
  });
});
