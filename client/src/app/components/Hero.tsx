import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-black text-white py-20" style={{borderBottomLeftRadius:"50px"}}>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="md:max-w-[40%] px-4">
          <p className="font-bold text-5xl">Reach your - <br/> audience & convert your leads</p>
          <p className="my-4">
            Get your customers with SEO, rank your business with email
            marketing, build sales leads
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-green-300 p-2 rounded-lg font-bold text-black">Get started</button>
            <button className="p-2 border border-white rounded-lg">Watch Demo</button>
          </div>
        </div>
        <div>
            <Image src="/../hero.png" alt="hero" width={400} height={100}></Image>
        </div>
      </div>
    </div>
  );
}
