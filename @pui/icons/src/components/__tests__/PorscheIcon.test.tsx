import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Icon, { IconDefinition } from "../PorscheIcon";
// import IconBase from '../IconBase';
jest.mock("../IconBase", () => () => <div>mockIconBase</div>);

describe("PorscheIcon", () => {
  it("should render PorscheIcon with correct props by default", () => {
    const mockClickFn = jest.fn();
    render(
      <Icon
        className="testClassName"
        icon={{ name: "loading", icon: { tag: "111", attrs: { test: "1" } } } as IconDefinition}
        style={{ color: "red" }}
        onClick={mockClickFn}
        spin={false}
        tabIndex={123}
      />
    );

    const icon = screen.getByRole("img", { name: "loading" });

    expect(screen.getByText("mockIconBase")).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("porscheicon porscheicon-loading porscheicon-spin testClassName");
    expect(icon).toHaveAttribute("tabIndex", "123");

    fireEvent.click(icon);
    expect(mockClickFn).toHaveBeenCalled();
  });
});
