import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="flex items-center w-full h-20 px-4 shrink-0 md:px-6">
      <Link className="my-auto mr-6 lg:flex" href="/">
        <span className="text-xl font-bold">learnsolid</span>
      </Link>
      <nav className="flex gap-3 ml-auto">
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="https://github.com/paulbgtr/learnsolid"
        >
          Github
        </Link>
      </nav>
    </header>
  );
};
