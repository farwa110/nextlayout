import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-5 my-5">
      <FaApple className="w-12 h-12 ml-5" />
      <nav>
        <ul className="flex gap-14 p-8 m-auto list-none">
          <li className="text-xl font-medium cursor-pointer">Mac</li>
          <li className="text-xl font-medium cursor-pointer">Iphone</li>
          <li className="text-xl font-medium cursor-pointer">Ipad</li>
          <li className="text-xl font-medium cursor-pointer relative group">
            Iwatch
            <span className="absolute top-0 left-0 right-0 bottom-0 bg-white z-[-1] rounded-lg transition-transform duration-300 transform scale-0 group-hover:scale-100 "></span>
          </li>
          <li className="text-xl font-medium cursor-pointer">Support</li>
        </ul>
      </nav>

      <div className="flex items-center gap-2 mr-5">
        <CiSearch className="text-3xl" />
        <span className="w-px h-5 bg-white opacity-50"></span>
        <FiShoppingBag className="text-3xl" />
      </div>
    </div>
  );
}
