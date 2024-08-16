import { FirstBlock } from "@/components/FirstBlock";
import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Elegirnos } from "@/components/Elegirnos";
import { Servicios } from "@/components/Servicios";
import { Testimonials } from "@/components/Testimonials";
import { Proyecto } from "@/components/Proyecto";
import { Footer } from "@/components/Footer";
import { Preguntas } from "@/components/Preguntas";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <About />
      <Elegirnos />
      <Servicios />
      <Testimonials />
      <Preguntas />
      <Proyecto />
      <Button />
      <Footer />
    </>
  );
}
