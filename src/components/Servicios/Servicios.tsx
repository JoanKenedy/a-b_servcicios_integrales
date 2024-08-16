"use client";
import Image from "next/image";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export function Servicios() {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
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
              onClick={() => setOpenModal2(!openModal2)}
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
              onClick={() => setOpenModal3(!openModal3)}
            >
              Saber más
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          openModal ? "left-0" : " "
        } fondo-services w-full fixed  h-full -left-full top-0 duration-700 flex justify-center items-center z-20`}
      >
        <MdClose
          className="text-white  text-4xl absolute top-5 right-4"
          onClick={() => setOpenModal(!openModal)}
        />
        <div
          className={`${
            openModal ? "scale-100 duration-1000" : "scale-0 duration-500"
          }  bg-white  w-11/12 h-3/6 md:w-5/12 md:h-2/5  flex justify-center items-center flex-col px-5`}
        >
          <h2 className="text-black text-center text-lg  font-semibold">
            Regularización de inmuebles
          </h2>
          <p className="text-black text-justify text-sm">
            Realizamos cualquier tramitología necesaria para regularización de
            cualquier inmueble, ya sea para su venta, compra, designación de
            herencia, etc.
          </p>
          <ul className="list-disc px-2 py-2">
            <li className="text-black text-sm">
              Tramitación judicial o notarial de sucesiones hereditarias,
              testamentarias o intestamentarias para adjudicar un inmueble.
            </li>
            <li className="text-black text-sm">
              Constitución de régimen de propiedad en condominio
            </li>
            <li className="text-black text-sm">
              Constitución y extinción de fideicomisos inmobiliarios.
            </li>
            <li className="text-black text-sm">Subdivisión de inmuebles.</li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          openModal2 ? "left-0" : " "
        } fondo-services w-full fixed  h-full -left-full top-0 duration-700 flex justify-center items-center z-20`}
      >
        <MdClose
          className="text-white  text-4xl absolute top-5 right-4"
          onClick={() => setOpenModal2(!openModal2)}
        />
        <div
          className={`${
            openModal2 ? "scale-100 duration-1000" : "scale-0 duration-500"
          }  bg-white  w-10/12 h-3/6 md:w-4/12 md:h-2/5 flex justify-center items-center flex-col px-5`}
        >
          <h2 className="text-black text-center  text-lg font-semibold">
            Venta de Inmuebles
          </h2>
          <p className="text-black text-justify text-sm">
            Realizamos la regularización de cualquier propiedad y procedemos a
            hacer todas las gestiones necesarias para su venta.
          </p>
          <ul className="list-disc px-2 py-2">
            <li className="text-black text-sm">
              Escrituración de propiedades ante notario público.
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          openModal3 ? "left-0" : " "
        } fondo-services w-full fixed  h-full -left-full top-0 duration-700 flex justify-center items-center z-20`}
      >
        <MdClose
          className="text-white  text-4xl absolute top-5 right-4"
          onClick={() => setOpenModal3(!openModal3)}
        />
        <div
          className={`${
            openModal3 ? "scale-100 duration-1000" : "scale-0 duration-500"
          }  bg-white  w-11/12 h-5/6 md:w-6/12 md:px-7 md:h-3/5 flex justify-center items-center flex-col px-5 `}
        >
          <h2 className="text-black text-center text-xl font-semibold">
            Compra de Inmuebles
          </h2>
          <p className="text-black text-justify text-sm ">
            Realizamos el estudio de cualquier propiedad a favor el posible
            comprador de propiedad para determinar si el inmueble no cuenta con
            algún problema jurídico para poder adquirirlo.
          </p>
          <ul className="list-disc px-2 py-2">
            <li className="text-black text-sm">
              Due Diligence para la compra de inmuebles.
            </li>
            <li className="text-black text-sm">
              Consultar el estatus jurídico del inmueble ante registro público
              de la propiedad y comercio.
            </li>
            <li className="text-black text-sm">
              Análisis para verificar que el inmueble cuente con escrituras o
              título de propiedad debidamente inscrito.
            </li>
            <li className="text-black text-sm">
              Análisis para constar que persona tiene la posesión, y en su caso,
              bajo que características y circunstancias.
            </li>
            <li className="text-black text-sm">
              Estudio para verificar si existen otras personas que consideren o
              reclamen tener algún derecho de propiedad sobre el inmueble y
              porque motivo.
            </li>
            <li className="text-black text-sm">
              Investigación sobre los servicios, impuestos y derechos que tenga
              en adeudo el inmueble.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
