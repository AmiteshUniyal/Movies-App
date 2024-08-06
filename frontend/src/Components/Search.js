import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../constants";

export default function Search() {
  const { string } = useParams();
  const [movies, setMovie] = useState();

  useEffect(() => {
    fetch(`${API_URL}/search/${string}`)
      .then((response) => response.json())
      .then((data) => setMovie(data.Search || []))
      .catch((error) =>
        console.error("Error in fetching movie details", error)
      );
  }, [string]);

  const IMAGE = "/download.png";

  return movies ? (
    movies.length === 0 ? (
      <div
        className="text-white pl-8 h-screen pt-40 sm:pt-24"
        style={{ backgroundColor: "rgb(24, 9, 41)" }}
      >
        <h1 className="text-3xl font-bold">No Results Found!!😕</h1>
      </div>
    ) : (
      <div
        className="text-white pt-40 pl-4 sm:pt-20 sm:pl-20 h-full "
        style={{ backgroundColor: "rgb(24, 9, 41)" }}
      >
        <h1 className="text-3xl font-bold">Searched Results for : {string}</h1>
        <br />
        <div className="flex flex-wrap gap-4 sm:gap-10">
          {movies.map((movie) => (
            <Link to={`/Expand/${movie.imdbID}`} key={movie.imdbID}>
              <div className="hover-grow w-24 sm:w-32 md:w-48 pb-8 ">
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : IMAGE}
                  alt={movie.Title}
                />
                <h2 className="text-center">{movie.Title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  ) : (
    <div
      className="text-white pl-8 h-screen pt-40 sm:pt-24"
      style={{ backgroundColor: "rgb(24, 9, 41)" }}
    >
      <h1 className="text-3xl font-bold">Loading... 🔁</h1>
    </div>
  );
  // }
}
