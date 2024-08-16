"use client";

import { Slide } from "./Slide";

export function Testimonials() {
  return (
    <div className="relative p-8 md:py-36 bg-black" id="testimonios">
      <div className="grid max-w-5xl gap-8 mx-auto my-4 md:grid-cols-2">
        <h2 className="text-2xl mb-2 font-semibold md:text-3xl ">
          Qué dicen los clientes de nosotros
        </h2>

        <div className="self-center">
          <p className="text-primaryDark md:text-lg ">
            Todo lo que necesitas para aceptar pagos con tarjeta y hacer crecer
            tu negocio en cualquier parte del planeta.
          </p>
        </div>
      </div>

      <Slide />
    </div>
  );
}
