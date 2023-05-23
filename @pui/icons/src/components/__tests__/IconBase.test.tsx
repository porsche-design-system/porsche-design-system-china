import React from "react";
import { render } from "@testing-library/react";
import IconBase from "../IconBase";
import { IconDefinition } from "../PorscheIcon";

const mockUseInsertStyles = jest.fn();
jest.mock("../../utils", () => ({
  useInsertStyles: () => mockUseInsertStyles()
}));

describe("IconBase", () => {
  it("should return a React element with passed props", () => {
    render(
      <IconBase
        icon={{ name: "loading", icon: { tag: "button", attrs: { test: "1" } } } as IconDefinition}
        style={{ color: "red" }}
      />
    );

    const generatedElement = document.querySelector('[aria-hidden="true"]');

    expect(mockUseInsertStyles).toHaveBeenCalled();
    expect(generatedElement).toBeInTheDocument();
  });
});
