import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mx-auto w-full max-w-4xl px-4 sm:px-6 md:w-4/5 lg:w-2/5 font-onest text-white gap-6 md:gap-10">
      <div className="flex flex-col items-center gap-3 md:gap-4 mb-2 text-center">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          All the pokemons
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-gray-200 to-blue-200 bg-clip-text text-transparent font-bold">
          Explore & Enjoy!
        </p>
      </div>

      <div className="flex flex-col items-center text-sm sm:text-base md:text-lg gap-1 mb-2 md:mb-4 text-blue-50 text-center max-w-lg md:max-w-none">
        <p className="px-2">
          Minimal. Beautiful. Blazing fast. Get free pokemon data with the core
          info you need-nothing more, nothing less.
        </p>
        <p className="px-2 mt-2">Crafted with modern CSS and Tailwind</p>
      </div>

      <button
        onClick={() => navigate("/dex")}
        className="flex items-center gap-2 mb-4 md:mb-6 bg-gradient-to-b from-[#1F1335] to-[#0A0611] hover:from-[#2A1D45] hover:to-[#140A22] py-2.5 px-5 md:px-6 rounded-xl text-base md:text-lg cursor-pointer font-medium transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        <span>&lt;/&gt;</span>
        Get Started
      </button>

      <hr className="border-t border-gray-500 w-3/4 md:w-2/3 opacity-50" />
    </div>
  );
};

export default Hero;
