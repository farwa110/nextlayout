import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="header-container">
      <FaApple className="apple-logo" />
      <nav>
        <ul>
          <li>Mac</li>
          <li>Iphone</li>
          <li>Ipad</li>
          <li>Iwatch</li>
          <li>Support</li>
        </ul>
      </nav>

      <div className="icon-container">
        <CiSearch className="search-icon" />
        <span className="divider"></span>
        <FiShoppingBag className="shopping-icon" />
      </div>
    </div>
  );
}
