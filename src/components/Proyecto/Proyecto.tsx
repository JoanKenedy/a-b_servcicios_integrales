"use client";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

export function Proyecto() {
  return (
    <div className="bg-white  py-10 md:py-20" id="contacto">
      <div className="cotainer-proyecto md:grid md:grid-cols-2 w-10/12  m-auto md:m-auto md:gap-10 md:px-10">
        <div className="item-proyecto flex flex-col gap-2 ">
          <h2 className="text-black  font-semibold text-2xl md:text-4xl">
            Platícanos tu proyecto
          </h2>
          <p className="text-zinc-500 text-sm md:text-base">
            Llena el formulario o llámanos para una consulta a domicilio.
          </p>
          <strong className="font-semibold text-black md:text-base">
            Dirección:
          </strong>
          <p className="text-zinc-500 text-sm md:text-base">
            Guadalajara, Querétaro, León, Monterrey Av. Fray Antonio Alcalde 10
            44100 Guadalajara, Jal., México
          </p>
          <p className="text-zinc-600 flex items-center gap-2 md:text-lg">
            <IoIosMail />
            info@misitio.com
          </p>
          <p className="text-zinc-600 flex items-center gap-2 md:text-lg">
            <IoLogoWhatsapp /> 5540565954
          </p>
        </div>
        <div className="item-proyecto ">
          <div>
            <h2 className="text-black text-2xl font-semibold py-2 pl-1 md:py-0 md:mb-2 md:text-4xl md:ml-10">
              Formulario de contacto
            </h2>
            <form
              method="POST"
              action="https://www.formbackend.com/f/664decaabbf1c319"
              className="flex flex-col gap-2 md:px-10 md:gap-3 "
            >
              <div className="relative ">
                <input
                  type="text"
                  name="name"
                  className="border w-full p-2 "
                  placeholder="Nombre"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="email"
                  className="border w-full p-2"
                  placeholder="Email"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="telefono"
                  className="border w-full p-2"
                  placeholder="Teléfono"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  className="border w-full p-2"
                  placeholder="Mensaje"
                ></textarea>
              </div>

              <button type="submit" className="bg-neutral-950 py-2 md:mt-1 ">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
