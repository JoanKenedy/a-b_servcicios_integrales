"use client";
import Image from "next/image";
export function Servicios() {
  return (
    <div className="bg-white relative">
      <h2 className="text-black text-center text-2xl font-semibold my-2 md:text-4xl">
        Servicios
      </h2>
      <div className="flex flex-col w-full gap-0 justify-center items-center md:flex-row md:gap-24 md:py-8 md:justify-around">
        <div className="relative flex justify-center items-center ">
          <Image
            src="/assets/regularizacion.jpg"
            width={500}
            height={500}
            className="md:hidden "
            alt="Picture of the author"
          />
          <h2 className="absolute text-white text-base z-10 title-servicios">
            Regularización de Inmuebles
          </h2>
        </div>
        <div className="relative flex justify-center items-center ">
          <Image
            src="/assets/regularizacion.jpg"
            width={500}
            height={500}
            className="md:hidden "
            alt="Picture of the author"
          />
          <h2 className="absolute text-white text-base z-10 title-servicios">
            Venta de Inmuebles
          </h2>
        </div>
        <div className="relative flex justify-center items-center ">
          <Image
            src="/assets/regularizacion.jpg"
            width={500}
            height={500}
            className="md:hidden "
            alt="Picture of the author"
          />
          <h2 className="absolute text-white text-base z-10 title-servicios">
            Compra de Inmuebles
          </h2>
        </div>
      </div>
    </div>
  );
}
