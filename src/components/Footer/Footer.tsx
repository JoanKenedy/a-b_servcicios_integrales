import Image from "next/image";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { footerData } from "./Footer.data";
import Link from "next/link";

export function Footer() {
  return (
    <div className="w-full p-6 mx-auto mt-10 md:mt-0 bg-black ">
      <div className="justify-between md:flex md:w-10/12 md:m-auto">
        <div>
          <Image
            src="/assets/logo.png"
            width={100}
            height={40}
            alt="Logo Bank"
          />

          <p className="mt-5 text-primaryDark max-w-[250px] text-sm">
            Una nueva forma de hacer pagos de forma sencilla
          </p>
        </div>
        {footerData.map(({ id, title, links }) => (
          <div key={id}>
            <h4 className="mt-8 text-lg md:mt-0">{title}</h4>
            {links.map(({ id, name, link }) => (
              <Link
                key={id}
                href={link}
                className="block mt-4 text-primaryDark hover:text-white text-sm"
              >
                {name}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="border-[#3F3E45] border-[1px] my-7" />

      <div className="items-center justify-between md:flex md:w-10/12 md:m-auto">
        <div className="my-3 text-sm">
          2024 Grupo B&R Servicios Integrales. Todos los derechos reservados.
        </div>
        <div className="flex gap-5">
          <RiInstagramLine />
          <RiFacebookCircleFill />
          <RiTwitterXFill />
          <RiLinkedinBoxFill />
        </div>
      </div>
    </div>
  );
}
