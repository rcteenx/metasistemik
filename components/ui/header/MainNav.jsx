import Link from "next/link";

import { StaticPages } from "@/content/data";

export default function LargeMenu() {
  const menu = StaticPages.filter((m) => m.id < 5);
  return (
    <nav className="flex-1 px-6 font-extralight text-sm md:text-base hidden xl:block">
      <ul className="hidden md:flex md:justify-center md:space-x-2 ">
        {menu.map((p) => (
          <li
            key={p.id}
            className={`  text-xl text-gray-600 hover:text-primary px-4 py-2 hover:bg-gray-100 hover:text-gray-800 rounded-xl `}
          >
            {/* ${ id === p.id ? "text-primary" : "" } */}
            <Link href={`/${p.link}`}>{p.title.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
