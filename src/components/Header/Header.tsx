"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { dataHeader } from "./Header.data";
import { useState } from "react";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <nav className="flex fixed top-0 left-0 z-20 flex-wrap items-center justify-between md:items-start  px-5 py-2 mx-auto md:py-2 md:px-20 bg-black w-full">
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/logo.png"
          width="80"
          height="15"
          className="w-18 md:w-24"
          alt="Logo Bank"
        />
      </Link>
      <HiOutlineMenuAlt2
        className="block text-3xl md:hidden cursor-pointer"
        onClick={() => setOpenMobileMenu(!openMobileMenu)}
      />

      <div
        className={`${
          openMobileMenu ? "opacity-1" : "opacity-0 md:opacity-100"
        } w-full md:w-max h-screen  absolute md:relative z-10 md:z-auto top-0 md:top-auto left-0 md:left-auto duration-700  bg-black md:h-0 `}
      >
        <MdOutlineClose
          className="absolute top-2 right-5 text-3xl md:hidden"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />

        <div className="flex justify-center items-center flex-col p-4 mt-4  md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
          {dataHeader.map(({ id, name, idLink }) => (
            <div
              key={id}
              className="px-4  py-5 transition-all duration-500 ease-in-out md:px-0 md:py-0 md:mt-4"
            >
              <Link
                href={idLink}
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
                className="text-lg hover:text-secondary font-sans"
              >
                {name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
