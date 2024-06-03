import IconComponent from "@/components/ui/icons/icons";

export default function MobileMenu() {
  return (
    <div className="w-64 px-4 flex justify-end">
      <nav id="service-menu">
        <ul className="flex space-x-4 text-sm m-4">
          <li className="bg-black text-white rounded-xl hover:bg-gray-400 hover:text-black py-1 px-3">
            <a href="/blog">Blog</a>
          </li>
          <li className="rounded-xl  hover:bg-gray-300 py-1 px-3">
            <a href="/iletisim">İletişim</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
