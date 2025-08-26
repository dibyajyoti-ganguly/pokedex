import Logo from "../assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex mx-auto w-2/5 p-4 justify-between items-center font-onest text-white text-2xl font-bold">
      <div className="flex gap-2">
        <img className="w-8" src={Logo} alt="Logo" />
        <p>Pokedex</p>
      </div>
      <div className="flex gap-5">
        <FiGithub className="cursor-pointer" />
        <FaXTwitter className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
