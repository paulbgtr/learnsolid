"use client";

import { useState, useEffect } from "react";
import { SolidLetter } from "./SolidLetter";
import { Explanation } from "./Explanation";

export const SolidText = () => {
  const [letterOnHover, setLetterOnHover] = useState<string | null>(null);

  const handleSetLetterOnHover = (letter: string | null) => {
    setLetterOnHover(letter);
  };

  const solidAbbreviation: Record<string, string> = {
    S: "Single responsibility principle",
    O: "Open/closed principle",
    L: "Liskov substitution principle",
    I: "Interface segregation principle",
    D: "Dependency inversion principle",
  };

  return (
    <>
      <section>
        <SolidLetter setLetterOnHover={handleSetLetterOnHover} letter="S" />
        <SolidLetter setLetterOnHover={handleSetLetterOnHover} letter="O" />
        <SolidLetter setLetterOnHover={handleSetLetterOnHover} letter="L" />
        <SolidLetter setLetterOnHover={handleSetLetterOnHover} letter="I" />
        <SolidLetter setLetterOnHover={handleSetLetterOnHover} letter="D" />
      </section>

      {letterOnHover && (
        <Explanation message={solidAbbreviation[letterOnHover]} />
      )}
    </>
  );
};
