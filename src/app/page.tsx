import { FirstBlock } from "@/components/FirstBlock";
import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Elegirnos } from "@/components/Elegirnos";
import { Servicios } from "@/components/Servicios";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <About />
      <Elegirnos />
      <Servicios />
    </>
  );
}
