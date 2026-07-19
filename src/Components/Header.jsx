import brainImg from "../assets/brain.png";

export default function Header() {
  return (
    <header
      className="flex justify-between px-10 bg-blue-900
    h-20"
    >
      <div className="flex items-center">
        <img src={brainImg} alt="Brain Img" width={70} />
        <div>
          <h1 className="text-xl font-bold text-white">Memory Game</h1>
          <p className="text-gray-300">Find all the matching pairs!</p>
        </div>
      </div>

      <div className="flex items-center">
        <div
          className="flex items-center gap-2 bg-blue-950 py-2
          px-3 rounded-3xl text-white font-semibold shadow-md
          border-indigo-500 border-2 shadow-indigo-500/50"
        >
          <time datetime="PT25M">
            25:00
          </time>
          <svg width={20} height={20}>
            <use href="../../public/icons.svg#icon-clock" />
          </svg>
        </div>

        <span className="h-2/4 w-[2px] mx-8 bg-indigo-500"></span>

        <div className="flex items-center gap-2 bg-blue-950 rounded-lg py-1 px-3 scale-90">
          <svg width={35} height={35}>
            <use href="../../public/icons.svg#icon-cup" />
          </svg>
          <div>
            <h2 className="text-blue-50">Score</h2>
            <span className="text-white text-xl font-bold">120</span>
          </div>
        </div>
      </div>
    </header>
  );
}
