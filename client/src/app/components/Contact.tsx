"use client";
import Image from "next/image";
import Link from "next/link";
import React, { use, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isloading, setIsloading] = useState(false);
  const handlesubmit = (e: any) => {
    e.preventDefault();
    setIsloading(true);
    fetch(`https://markall7-backend.onrender.com/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((datas) => {
        setIsloading(false);
        console.log(datas);
      });
  };
  return (
    <>
      <div className="mt-10">
        <div className="py-16 bg-blue-100 flex flex-wrap items-center justify-evenly gap-4">
          <div className="flex flex-col gap-16">
            <div>
              <div className="flex gap-2 items-center">
                <Image src="/call.png" alt="call" width={30} height={30} />
                <p className="font-semibold text-3xl">Call us</p>
              </div>
              <Link href="tel:+919354566860">
                <p className="underline mt-2 text-xl">+91 9354566860</p>
              </Link>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/location.png"
                  alt="call"
                  width={30}
                  height={30}
                />
                <p className="font-semibold text-3xl">Location</p>
              </div>
              <p className="mt-2 text-xl">Ghaziabad, Uttar Pradesh</p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <Image src="/mail.png" alt="call" width={30} height={30} />
                <p className="font-semibold text-3xl">Mail us</p>
              </div>
              <Link href="mailto:info@markall.in">
                <p className="mt-2 text-xl">info@markall.in</p>
              </Link>
            </div>
          </div>
          <div className="bg-white p-8 md:max-w-[40%] mx-8 mt-5 rounded-lg">
            <p className="font-bold text-4xl">Contact Now</p>
            <p className="mt-2">
              In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum
              viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl.
              Id vestibulum tincidunt adipiscing gravida risus.
            </p>
            <form className="mt-5" onSubmit={handlesubmit}>
              <div className="border-b border-gray-300 py-2 my-5">
                <input
                  className="outline-none"
                  type="text"
                  placeholder="Name *"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="border-b border-gray-300 py-2 my-5">
                <input
                  className="outline-none"
                  type="email"
                  placeholder="Email *"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="border-b border-gray-300 py-2 my-5">
                <input
                  className="outline-none"
                  type="tel"
                  placeholder="Phone *"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="border-b border-gray-300 py-2 my-5">
                <input
                  className="outline-none"
                  type="text"
                  placeholder="Message *"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              {isloading ? (
                <>
                  {" "}
                  <button
                    disabled
                    className="cursor-progress bg-blue-500 p-2 text-white font-semibold"
                  >
                    Submitting From
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <button className=" bg-blue-500 p-2 text-white font-semibold">
                    Submit From
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
