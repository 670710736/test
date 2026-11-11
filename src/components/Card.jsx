
function Card({ anime }) {
  return (
    <div className="bg-[#1c2038] rounded-xl overflow-hidden hover:scale-105 transition">

      <img
        src={anime.image}
        alt={anime.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-3">
        <h3 className="text-white font-semibold">
          {anime.title}
        </h3>

        <p className="text-yellow-400 mt-2">
          ★ {anime.rating}
        </p>
      </div>

    </div>
  );
}

export default Card;
