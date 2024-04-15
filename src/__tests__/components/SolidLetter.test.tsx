import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, mock, expect } from "bun:test";
import { SolidLetter } from "@/components/routeRelated/index/SolidText/SolidLetter";

describe("SolidLetter", () => {
  it("renders the letter", () => {
    render(<SolidLetter letter="A" setLetterOnHover={() => {}} />);
    screen.getByText("A");
  });

  it("calls setLetterOnHover with the letter on mouse enter", () => {
    const setLetterOnHover = mock();
    render(<SolidLetter letter="B" setLetterOnHover={setLetterOnHover} />);
    fireEvent.mouseEnter(screen.getByText("B"));

    expect(setLetterOnHover).toHaveBeenCalledWith("B");
  });

  it("calls setLetterOnHover with null on mouse leave", () => {
    const setLetterOnHover = mock();
    render(<SolidLetter letter="C" setLetterOnHover={setLetterOnHover} />);
    fireEvent.mouseLeave(screen.getByText("C"));

    expect(setLetterOnHover).toHaveBeenCalledWith(null);
  });

  it("throws an error if the letter is not a single character", () => {
    const setLetterOnHover = mock();

    const renderWithInvalidLetter = () => {
      render(<SolidLetter letter="AB" setLetterOnHover={setLetterOnHover} />);
    };

    expect(renderWithInvalidLetter).toThrow(
      "Letter must be a single character"
    );
  });
});
