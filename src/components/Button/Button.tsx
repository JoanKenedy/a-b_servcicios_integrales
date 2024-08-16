"use client";
import Image from "next/image";

export function Button() {
  return (
    <div className="w-full h-full relative">
      <div className="btn-float fixed right-2 bottom-2 z-10">
        <a href="https://wa.me/525540565954" target="_blank">
          <Image
            src="/assets/whats.png"
            width={70}
            height={70}
            alt="Picture of the author"
            className="w-14 h-14 md:w-16 md:h-16 animate-bounce"
          />
        </a>
      </div>
    </div>
  );
}
