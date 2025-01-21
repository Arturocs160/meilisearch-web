"use client"
import { MeiliSearch } from "meilisearch";
import { useState } from "react";

export default function Home() {
  const [busquedaResultados, setbusquedaResultados] = useState([]);
  const client = new MeiliSearch({
    host: "http://172.233.129.212:7700",
    apiKey: "2a5fb1e956eccf0fd9e1555842e4b6bd96fe244fabfe83b9e15a1487816d",
  });

  const buscarPeliculas = async (e) => {
    client
      .index("movies")
      .search(e.target.value)
      .then((result) => {
        setbusquedaResultados(result.hits);
      });
  };

  // const movies = [
  //   {
  //     id: 100,
  //     title: "Lock, Stock and Two Smoking Barrels",
  //     overview:
  //       "A card shark and his unwillingly-enlisted friends need to make a lot of cash quick after losing a sketchy poker match. To do this they decide to pull a heist on a small-time gang who happen to be operating out of the flat next door.",
  //     genres: ["Crime", "Comedy"],
  //     poster: "https://image.tmdb.org/t/p/w500/8kSerJrhrJWKLk1LViesGcnrUPE.jpg",
  //   },
  //   {
  //     id: 10001,
  //     title: "Young Einstein",
  //     overview:
  //       "Albert Einstein is the son of a Tasmanian apple farmer, who discovers the secret of splitting the beer atom to put the bubbles back into beer. When Albert travels to Sydney to patent his invention he meets beautiful French scientist Marie Curie, as well as several unscrupulous types who try to take advantage of the naive genius and his invention.",
  //     genres: ["Comedy", "Biography"],
  //     poster: "https://image.tmdb.org/t/p/w500/2OtWkhzdpsmE7gnY3VsJCiFr9U3.jpg",
  //   },
  //   {
  //     id: 10002,
  //     title: "Mona Lisa",
  //     overview:
  //       "George is a small-time crook just out of prison who discovers his tough-guy image is out of date. Reduced to working as a minder/driver for high-class call girl Simone, he has to agree when she asks him to find a young colleague from her King's Cross days. That's when George's troubles just start.",
  //     genres: ["Drama", "Crime"],
  //     poster: "https://image.tmdb.org/t/p/w500/kCwZ3v6ReL9tyeLJsizzemsrmbS.jpg",
  //   },
  //   {
  //     id: 100,
  //     title: "Lock, Stock and Two Smoking Barrels",
  //     overview:
  //       "A card shark and his unwillingly-enlisted friends need to make a lot of cash quick after losing a sketchy poker match. To do this they decide to pull a heist on a small-time gang who happen to be operating out of the flat next door.",
  //     genres: ["Crime", "Comedy"],
  //     poster: "https://image.tmdb.org/t/p/w500/8kSerJrhrJWKLk1LViesGcnrUPE.jpg",
  //   },
  //   {
  //     id: 10001,
  //     title: "Young Einstein",
  //     overview:
  //       "Albert Einstein is the son of a Tasmanian apple farmer, who discovers the secret of splitting the beer atom to put the bubbles back into beer. When Albert travels to Sydney to patent his invention he meets beautiful French scientist Marie Curie, as well as several unscrupulous types who try to take advantage of the naive genius and his invention.",
  //     genres: ["Comedy", "Biography"],
  //     poster: "https://image.tmdb.org/t/p/w500/2OtWkhzdpsmE7gnY3VsJCiFr9U3.jpg",
  //   },
  //   {
  //     id: 10002,
  //     title: "Mona Lisa",
  //     overview:
  //       "George is a small-time crook just out of prison who discovers his tough-guy image is out of date. Reduced to working as a minder/driver for high-class call girl Simone, he has to agree when she asks him to find a young colleague from her King's Cross days. That's when George's troubles just start.",
  //     genres: ["Drama", "Crime"],
  //     poster: "https://image.tmdb.org/t/p/w500/kCwZ3v6ReL9tyeLJsizzemsrmbS.jpg",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gray-200 text-gray-800 bg">
      <div className="flex">
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold font-sans ">Buscador con meilisearch</h2>
            <input
              type="text"
              placeholder="Busca alguna pelicula"
              className="border border-gray-300 rounded-md p-2 w-1/3 rounded-2xl"
              onChange={(e) => buscarPeliculas(e)}
            />
          </div>
          <div className="grid grid-cols-3 gap-6 mt-6">
            {busquedaResultados.map((movie, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden p-4"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full max-h-64 object-scale-down rounded-t-lg"
                  />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{movie.title}</h3>
                  <p className="text-sm text-gray-600">
                    {movie.genres.join(", ")}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">{movie.overview}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
