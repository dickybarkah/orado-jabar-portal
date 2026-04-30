import { Hero } from "@/components/public/Hero";
import { Stats } from "@/components/public/Stats";
import { Sambutan } from "@/components/public/Sambutan";
import { Indeks } from "@/components/public/Indeks";
import { CtaPendaftaran } from "@/components/public/CtaPendaftaran";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Sambutan />
      <Indeks />
      <CtaPendaftaran />
    </>
  );
}
