import Image from "next/image";
import Faq from "@/components/faq/Faq";
import Flower from "@/components/flower/Flower";
import bgImage1 from "../app/assets/images/images/bg-1.png";
export default function Home() {
  return (
    <>
      <Image src={bgImage1} alt="" className="bg" />
      <Image src={bgImage1} alt="" className="bg-2" />
      <section className="home-section">
        <Flower />
        <Faq />
      </section>
    </>
  );
}
