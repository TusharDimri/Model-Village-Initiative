import Agenda from "@/components/home/Agenda";
import Conference from "@/components/home/Conference";
import Hero from "@/components/home/Hero";
import Ideas from "@/components/home/Ideas";
import Stakeholders from "@/components/home/Stakeholders";
import Themes from "@/components/home/Themes";
import Why from "@/components/home/Why";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Why />
      <Themes />
      <Ideas />
      <Stakeholders />
      <Agenda />
      <Conference />
    </div>
  );
}
