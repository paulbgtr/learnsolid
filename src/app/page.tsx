import { SolidText } from "@/components/routeRelated/index/SolidText/SolidText";
import { NavigationArrow } from "../components/routeRelated/index/NavigationArrow";
import { Faq } from "@/components/routeRelated/Faq/Faq";

export default function Home() {
  return (
    <>
      <section className="h-screen flex-grow grid place-items-center">
        <SolidText />
        <NavigationArrow />
      </section>
      <section className="h-screen grid justify-center pt-24">
        <Faq />
      </section>
    </>
  );
}
