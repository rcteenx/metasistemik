"use client";
import Link from "next/link";
import { StaticPages } from "@/content/data";

import { useState } from "react"; // import state

export default function MobileMenu() {
  const menu = StaticPages.filter((m) => m.id < 6);
  const [isNavOpen, setIsNavOpen] = useState(false);
  function handleClick() {
    setIsNavOpen((prev) => !prev);
  }

  return (
    <div className="w-48 px-4 flex justify-end">
      <nav id="service-menu">
        <ul className="hidden xl:flex space-x-4 text-sm m-4">
          <li className="gradientAccentToDark gradientTransition text-white rounded-xl py-1 px-3">
            <a href="/blog">Blog</a>
          </li>
          <li className="rounded-xl  hover:bg-gray-300 py-1 px-3">
            <a href="/iletisim">İletişim</a>
          </li>
        </ul>

        <section className="flex xl:hidden cursor-pointer">
          <div className="space-y-2 h-8 w-8" onClick={handleClick}>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-red-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              {menu.map((p) => (
                <li
                  key={p.id}
                  className={`border-b border-gray-400 my-8 uppercase`}
                >
                  <Link href={`/${p.link}`} onClick={handleClick}>
                    {p.title.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </nav>
    </div>
  );
}
