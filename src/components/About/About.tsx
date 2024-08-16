"use client";
import Link from "next/link";

import Image from "next/image";

export function About() {
  return (
    <div className="relative   pt-5  bg-white md:py-0 about">
      <div className=" md:grid md:grid-cols-2  md:place-items-center m-auto back-about md:py-0 ">
        <div className="px-5  ">
          <h2 className="text-black font-semibold text-2xl text-center md:text-4xl">
            Nosotros
          </h2>
          <p className="text-zinc-500 text-sm  text-justify font-thin md:text-base md:p-4">
            En Grupo B&R , nos apasiona ayudar a las personas a encontrar su
            hogar perfecto. Con años de experiencia en el mercado inmobiliario,
            nuestro equipo de expertos se compromete a brindar un servicio
            personalizado y profesional para satisfacer las necesidades de
            nuestros clientes. Nuestra misión es conectar a las personas con los
            espacios que necesitan para vivir, trabajar y prosperar. Nos
            enfocamos en construir relaciones duraderas con nuestros clientes,
            escuchando sus necesidades y proporcionando soluciones innovadoras y
            efectivas.
          </p>

          <a
            href=""
            className="bg-black block text-sm text-center m-auto w-44 py-2 px-2 mt-4 font-thin md:w-48 md:text-base"
          >
            Más información
          </a>
        </div>
        <div className="relative ">
          <div
            className="hidden  md:flex justify-center w-full items-center "
            style={{
              backgroundImage: "url('/assets/about.jpg')",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              height: "70vh",
              width: "45vw",
              padding: " 20px ",
              margin: "30px auto 0 auto",
            }}
          ></div>
          <Image
            src="/assets/about-cel.png"
            width={500}
            height={400}
            className="md:hidden mt-14"
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
