"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  var navigation = [
    // { name: "Home", href: "/", current: false },
    { name: "Services", href: "/", current: false },
    { name: "Pricing", href: "/", current: false },
    { name: "About Us", href: "/", current: false },
  ];

  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-between rounded-md p-2  hover:bg-gray-700 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-wrap items-center justify-between w-full">
                <Link href="/">
                  <p className="text-white font-bold text-2xl">MARKALL</p>
                </Link>
                <div className="hidden sm:ml-6 sm:flex">
                  <div className="flex items-center gap-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-white text-sm font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex bg-green-300 p-2 rounded-lg font-bold">
                  <button>Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className=" block text-md font-medium text-white mb-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="bg-green-300 p-2 rounded-lg font-bold">
                <button>Get Started</button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
