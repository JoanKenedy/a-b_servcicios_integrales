"use client";
import Image from "next/image";

export function Button() {
  return (
    <div className="w-full h-full relative">
      <div className="btn-float fixed right-2 bottom-2 z-10">
        <Image
          src="/assets/whats.png"
          width={70}
          height={70}
          alt="Picture of the author"
          className="w-14 h-14 md:w-16 md:h-16 animate-bounce"
        />
      </div>
    </div>
  );
}
