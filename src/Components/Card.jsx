import playersImg from "../assets/players.jpg";
import fallback from "../assets/fallback.jpg";

export default function Card({ details }) {
  const x = details.x * -1;
  const y = details.y * -1;

  return (
    <div className="group aspect-square w-full [perspective:1000px] cursor-pointer">
      <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform group-hover:[transform:rotateY(180deg)]">
        <div
          className="absolute inset-0 w-full h-full rounded overflow-hidden bg-cover bg-no-repeat [backface-visibility:hidden] z-20"
          style={{ backgroundImage: `url(${fallback})` }}
        >
          <div className="w-full h-full bg-slate-800/10" />
        </div>

        <div
          className="absolute inset-0 w-full h-full rounded overflow-hidden bg-red-500 bg-no-repeat [transform:rotateY(180deg)] [backface-visibility:hidden]"
          style={{
            backgroundImage: `url(${playersImg})`,
            backgroundPosition: `${x}px ${y}px`,
          }}
        ></div>
      </div>
    </div>
  );
}
