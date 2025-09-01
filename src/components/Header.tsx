import Logo from "../assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Header = () => {
  const currentPath = useLocation();

  const marginClass = currentPath.pathname === "/" ? "mb-28" : "mb-8";

  return (
    <div
      className={`flex mx-auto w-2/5 p-4 ${marginClass} justify-between items-center font-onest text-white text-2xl font-bold`}
    >
      <div className="flex gap-2">
        <img className="w-8" src={Logo} alt="Logo" />
        <p>Pokedex</p>
      </div>
      <div className="flex gap-5">
        <a href="https://github.com/dibyajyoti-ganguly">
          <FiGithub className="cursor-pointer" />
        </a>
        <a href="https://x.com/dibstwt">
          <FaXTwitter className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Header;
