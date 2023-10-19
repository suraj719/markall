import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <>
      <div className="my-10 md:px-28 px-5">
        <div className="flex flex-wrap justify-around py-10">
          <div>
            <p className="font-semibold text-xl">OUR FEATURES</p>
            <span className="font-bold text-3xl border-b border-gray-600">
              Know Your audience and boost sales
            </span>
          </div>
          <p className="md:max-w-[40%] pt-2 font-semibold text-lg">
            Effective emails convey the most significant substance to a client
            at the proper time which is our marketing approaches include
            scheduled emails.
          </p>
        </div>
        <div className="flex flex-wrap justify-around rounded-xl bg-gray-100 p-5 items-center my-10 gap-4">
          <div className="md:max-w-[40%]">
            <p className="font-bold text-2xl">
              Save precious time with automation
            </p>
            <p className="font-semibold text-lg my-5">
              Lorem ipsum dolor sit amet consectetur. Sed id luctus posuere
              massa leo purus cras commodo. Volutpat massa fusce sit libero ut
              mollis risus.
            </p>
            <button className="font-bold text-lg">Learn More -&gt;</button>
          </div>
          <div>
            <Image
              src="/auto.png"
              alt="automation"
              width={400}
              height={100}
            />
          </div>
        </div>
        <div
          className="flex flex-wrap justify-around rounded-xl p-5 items-center my-10 gap-4"
          style={{ background: "#FFFBEE" }}
        >
          <div className="md:max-w-[40%]">
            <p className="font-semibold text-lg">OUR HAPPY CUSTOMERS</p>
            <p className="font-bold text-4xl">
              What our customers say about us
            </p>
          </div>
          <div>
            <Image
              src="/testi.png"
              alt="automation"
              width={400}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}
