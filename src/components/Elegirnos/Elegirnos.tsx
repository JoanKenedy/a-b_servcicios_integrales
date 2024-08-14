"use client";
import Link from "next/link";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { BsChatHeartFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";

import Image from "next/image";

export function Elegirnos() {
  return (
    <div className="h-auto relative py-7 w-full md:w-10/12 md:m-auto">
      <h2 className="text-black text-center text-2xl font-semibold my-2 md:text-4xl">
        ¿Por qué elegirnos?
      </h2>
      <div className="flex flex-col w-full gap-5 justify-center items-center md:flex-row md:gap-24 md:py-8 md:justify-around">
        <div className=" flex flex-col justify-center items-center ">
          <FaMoneyCheckAlt className="text-yellow-600 text-5xl md:text-6xl" />
          <h3 className="text-yellow-600 text-base my-1 md:mt-2 text-center">
            Financiamiento accesible
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <FaCalendarCheck className="text-yellow-600 text-5xl md:text-6xl" />
          <h3 className="text-yellow-600 text-base my-1 md:mt-2 text-center">
            Consultas gratis a domicilio
          </h3>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <BsChatHeartFill className="text-yellow-600 text-5xl md:text-6xl" />
          <h3 className="text-yellow-600 text-base my-1 md:mt-2 text-center">
            Servicio de calidad
          </h3>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <FaLock className="text-yellow-600 text-5xl md:text-6xl" />
          <h3 className="text-yellow-600 text-base my-1 md:mt-2 text-center">
            Autorizado y asegurados
          </h3>
        </div>
      </div>
    </div>
  );
}
