import Image from "next/image";
import styles from "./page.module.css";
import Faq from "@/components/faq/Faq";
import Flower from "@/components/flower/Flower";

export default function Home() {
  return (
    <>
      <section className="home-section">
        <Flower />
        <Faq />
      </section>
    </>
  );
}
