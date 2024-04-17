import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const NavigationArrow = () => {
  return (
    <div className="text-center absolute bottom-2">
      <Link className="hover:opacity-80 duration-200" href="#faq">
        <div className="space-y-3">
          <span>Have some questions?</span>
          <div className="text-3xl animate-bounce">↓</div>
        </div>
      </Link>
    </div>
  );
};
