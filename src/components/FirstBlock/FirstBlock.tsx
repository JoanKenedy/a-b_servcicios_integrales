"use client";
import Link from "next/link";
import styles from "./first.module.css";
import Image from "next/image";

export function FirstBlock() {
  return (
    <div className="relative  bg-black">
      <div
        className="hidden overflow-hidden md:flex justify-center w-full items-center "
        style={{
          backgroundImage: "url('/assets/house.jpg')",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          height: "90vh",
          width: "90vw",
          padding: " 20px ",
          margin: "30px auto 0 auto",
        }}
      ></div>
      <Image
        src="/assets/casa.webp"
        width={500}
        height={600}
        className="md:hidden mt-14"
        alt="Picture of the author"
      />

      <div className="z-5 absolute left-0 top-0 flex flex-col justify-center items-center w-full h-full">
        <div className="fondo p-2 w-80 md:w-6/12  text-center">
          <h2 className="font-bold font-serif text-xl md:text-4xl md:mt-5">
            ¡Bienvenido , estamos para ayudarte!
          </h2>
          <a
            href=""
            className="bg-white px-2 py-1 block mt-4 mb-4 w-40 text-center ml-auto mr-auto text-black md:w-48 md:text-xl md:px-2 md:mt-5 "
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
}
