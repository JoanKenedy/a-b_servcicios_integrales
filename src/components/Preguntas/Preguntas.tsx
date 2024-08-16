"use client";
import { useState } from "react";
import { faqs } from "./Preguntas.data";
import { MdKeyboardArrowDown } from "react-icons/md";

export function Preguntas() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="bg-slate-400 w-full h-full p-5">
      <h2 className="text-2xl font-semibold text-white py-5">
        Preguntas frecuentes
      </h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index} className="mb-4">
            <button
              className={`w-full  flex justify-between items-center${
                expanded === index ? "bg-black" : ""
              }`}
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              <span className="text-base">{faq.question}</span>
              <MdKeyboardArrowDown
                className={`${
                  expanded === index ? "rotate-180" : ""
                } transition-transform text-2xl`}
              />
            </button>
            {expanded === index && (
              <div className="p-1 bg-transparent w-full ">
                <p className="text-sm  text-justify">{faq.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
