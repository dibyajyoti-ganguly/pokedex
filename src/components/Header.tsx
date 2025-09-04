import Logo from "../assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const currentPath = useLocation();
  const navigate = useNavigate();

  const marginClass = currentPath.pathname === "/" ? "mb-28" : "mb-8";

  return (
    <div
      className={`flex mx-auto w-full max-w-lg md:w-2/5 px-4 py-4 ${marginClass} justify-between items-center font-onest text-white text-xl md:text-2xl font-bold`}
    >
      <div
        onClick={() => navigate("/")}
        className="flex gap-2 items-center cursor-pointer"
      >
        <img className="w-6 md:w-8" src={Logo} alt="Logo" />
        <p className="text-lg md:text-2xl">Pokedex</p>
      </div>
      <div className="flex gap-3 md:gap-5">
        <a href="https://github.com/dibyajyoti-ganguly">
          <FiGithub className="cursor-pointer text-xl md:text-2xl hover:text-gray-300 transition-colors" />
        </a>
        <a href="https://x.com/dibstwt">
          <FaXTwitter className="cursor-pointer text-xl md:text-2xl hover:text-gray-300 transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default Header;
