"use client";
import Image from "next/image";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export function Servicios() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-white relative md:pb-8 " id="servicios">
      <h2 className="text-black text-center text-2xl font-semibold my-2 md:text-4xl">
        Servicios
      </h2>

      <div className="flex flex-col  gap-0 justify-center items-center md:grid md:grid-cols-3 md:gap-4 md:w-11/12 md:m-auto">
        <div className="relative">
          <Image
            src="/assets/regularizacion.jpg"
            width={500}
            height={500}
            className="w-full"
            alt="Picture of the author"
          />
          <div className="absolute left-0 top-0 fondo-services w-full h-full flex justify-center items-center flex-col p-2">
            <h2 className="text-white text-2xl font-semibold font-sans text-center">
              Regularización de inmuebles
            </h2>
            <button
              className="block bg-transparent border-solid border-2 w-36 py-1 mt-3 btn-efect cursor-pointer"
              onClick={() => setOpenModal(!openModal)}
            >
              Saber más
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/assets/venta.jpg"
            width={500}
            height={500}
            className="w-full "
            alt="Picture of the author"
          />
          <div className="absolute left-0 top-0 fondo-services w-full h-full flex justify-center items-center flex-col p-2">
            <h2 className="text-white text-2xl font-semibold font-sans text-center">
              Venta de inmuebles
            </h2>
            <button
              className="block bg-transparent border-solid border-2 w-36 py-1 mt-3 btn-efect"
              onClick={() => setOpenModal(!openModal)}
            >
              Saber más
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/assets/compra.jpg"
            width={500}
            height={500}
            className="w-full"
            alt="Picture of the author"
          />
          <div className="absolute left-0 top-0 fondo-services w-full h-full flex justify-center items-center flex-col p-2">
            <h2 className="text-white text-2xl font-semibold font-sans text-center">
              Compra de inmuebles
            </h2>
            <button
              className="block bg-transparent border-solid border-2 w-36 py-1 mt-3 btn-efect"
              onClick={() => setOpenModal(!openModal)}
            >
              Saber más
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          openModal ? "translate-y-full" : "transalte-y-0"
        } fondo-services w-full fixed h-full left-0 top-0 duration-500 flex justify-center items-center z-20`}
      >
        <MdClose
          className="text-white  text-4xl absolute top-5 right-4"
          onClick={() => setOpenModal(!openModal)}
        />
        <div
          className={`${
            openModal ? "scale-0" : "scale-100"
          }  bg-white w-10/12 h-4/6 md:w-5/12 md:h-3/5 duration-1000`}
        >
          <h2>El modal</h2>
        </div>
      </div>
    </div>
  );
}
