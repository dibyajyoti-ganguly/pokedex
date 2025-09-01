import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mx-auto w-2/5 font-onest text-white gap-10">
      <div className="flex flex-col items-center gap-4 mb-2">
        <p className="text-6xl font-semibold">All the pokemons</p>
        <p className="text-4xl bg-gradient-to-r from-gray-200 to-blue-200 bg-clip-text text-transparent font-bold">
          Explore & Enjoy!
        </p>
      </div>
      <div className="flex flex-col items-center text-lg gap-1 mb-4 text-blue-50">
        <p>Minimal. Beautiful. Blazing fast. Get free pokemon</p>
        <p>data with the core info you need-nothing more,</p>
        <p>nothing less.</p>
        <p>Crafted with modern CSS and Tailwind</p>
      </div>
      <button
        onClick={() => navigate("/dex")}
        className="flex items-center gap-2 mb-6 bg-gradient-to-b from-[#1F1335] to-[#0A0611] hover:from-[#2A1D45] hover:to-[#140A22] py-2.5 px-5 rounded-xl text-lg cursor-pointer font-medium transition-colors duration-200"
      >
        <span>&lt;/&gt;</span>
        Get Started
      </button>
      <hr className="border-width:[1px] border-gray-500 w-3/4 opacity-50" />
    </div>
  );
};

export default Hero;
