import Header from "./Header";
import Dexcontainer from "./Dexcontainer";

const Dex = () => {
  return (
    <div className="relative z-10 py-5">
      <Header />
      <button className="flex items-center mx-auto gap-2 mb-[72px] px-6 pt-3 pb-3.5 rounded-2xl text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition-all duration-200 cursor-pointer">
        <span className="text-base">🗘</span>
        Surprise Me
      </button>
      <Dexcontainer />
    </div>
  );
};

export default Dex;
