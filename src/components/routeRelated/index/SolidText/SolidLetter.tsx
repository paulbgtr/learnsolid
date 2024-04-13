import Link from "next/link";

export const SolidLetter = ({
  letter,
  setLetterOnHover,
}: {
  letter: string;
  setLetterOnHover: (letter: string | null) => void;
}) => {
  const handleMouseEnter = () => setLetterOnHover(letter);
  const handleMouseLeave = () => setLetterOnHover(null);

  return (
    <Link href={letter}>
      <span
        className="hover:opacity-80 leading-none font-bold text-20xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {letter}
      </span>
    </Link>
  );
};
