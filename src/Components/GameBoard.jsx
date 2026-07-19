import DATA from "../util/data";
import Card from "./Card";

export default function GameBoard() {
  return (
    <section className="text-center">
      <h2 className="my-5 text-2xl font-bold">Game Board</h2>
      <div className="grid grid-cols-6 grid-rows-5 gap-3 max-w-[810px] m-auto">
        {DATA.map((card) => (
          <Card key={card.id} details={card}/>
        ))}
      </div>
    </section>
  )
}