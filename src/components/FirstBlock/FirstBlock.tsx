"use client";
import Link from "next/link";
import styles from "./first.module.css";
import Image from "next/image";

export function FirstBlock() {
  return (
    <div className="relative bg-black">
      <div
        className="hidden overflow-hidden md:flex justify-center w-full items-center "
        style={{
          backgroundImage: "url('/assets/house.png')",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          height: "90vh",
          width: "90vw",
          padding: " 20px ",
          margin: "auto",
        }}
      ></div>
      <Image
        src="/assets/casa.webp"
        width={500}
        height={500}
        className="md:hidden"
        alt="Picture of the author"
      />

      <div className="z-5 absolute left-0 top-0 flex justify-center items-center w-full h-full">
        <div className="fondo p-2 w-80 text-center">
          <h2 className="font-bold font-serif text-xl">
            ¡Bienvenido , estamos para ayudarte!
          </h2>
        </div>
      </div>
    </div>
  );
}
