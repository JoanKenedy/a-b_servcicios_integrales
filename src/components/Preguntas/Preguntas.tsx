"use client";
import { useState } from "react";
import { faqs } from "./Preguntas.data";

import { FaPlus } from "react-icons/fa6";

export function Preguntas() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="bg-slate-400 w-full h-full p-4 md:py-10">
      <ul className="w-full md:w-10/12 md:m-auto">
        <h2 className="text-2xl font-semibold text-white py-5  md:text-3xl">
          Preguntas frecuentes
        </h2>
        {faqs.map((faq, index) => (
          <li key={index} className="w-full mb-4">
            <div
              className={`w-full  flex justify-between items-center${
                expanded === index ? "bg-black" : ""
              }`}
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              <span className="text-xs text-justify pr-5 md:text-base">
                {faq.question}
              </span>

              <FaPlus
                className={`${
                  expanded === index ? "rotate-180" : ""
                } transition-transform md:text-xl`}
              />
            </div>
            {expanded === index && (
              <div className="p-2 bg-transparent w-full ">
                <p className="text-xs  text-justify md:text-base">
                  {faq.answer}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
