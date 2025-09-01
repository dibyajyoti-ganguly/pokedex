/* eslint-disable @typescript-eslint/no-explicit-any */
interface CardProps {
  data: any;
}

const Card = ({ data }: CardProps) => {
  const { name, id, sprites } = data;

  return (
    <div className="flex flex-col gap-6 w-52 h-[320px] pt-8 cursor-pointer text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition-all duration-200">
      <img
        className="flex mx-auto w-32 h-28"
        src={sprites.other.dream_world.front_default}
        alt="pokemon"
      />
      <div className="flex flex-col gap-2">
        <p className="flex mx-auto font-onest text-xl font-semibold">
          {`#${id.toString().padStart(3, "0")}`}
        </p>
        <p className="flex mx-auto font-onest text-2xl font-bold">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default Card;
