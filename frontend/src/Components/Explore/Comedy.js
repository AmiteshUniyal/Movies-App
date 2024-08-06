import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../constants";

export default function Comedy() {
  const [movies4, setmovies4] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/comedy`)
      .then((response) => response.json())
      .then((data) => setmovies4(data.Search || []))
      .catch((error) => console.error("Error in data-fetching", error));
  }, []);

  return (
    <div
      className="w-full pt-40 pl-4 sm:pt-20 sm:pl-20 h-full text-white"
      style={{ backgroundColor: "rgb(24, 9, 41)" }}
    >
      <h1 className="text-3xl font-bold">Comedy Movies</h1>
      <br />
      <div className="flex flex-wrap gap-10 ">
        {movies4.map((movie) => (
          <Link to={`/Expand/${movie.imdbID}`} key={movie.imdbID}>
            <div className="hover-grow w-24 sm:w-32 md:w-48">
              <img src={movie.Poster} alt={movie.Title} />
              <h2 className="text-center ">{movie.Title}</h2>
            </div>
          </Link>
        ))}
        {movies4.map((movie) => (
          <Link to={`/Expand/${movie.imdbID}`} key={movie.imdbID}>
            <div className="hover-grow w-24 sm:w-32 md:w-48">
              <img src={movie.Poster} alt={movie.Title} />
              <h2 className="text-center ">{movie.Title}</h2>
            </div>
          </Link>
        ))}
        {movies4.map((movie) => (
          <Link to={`/Expand/${movie.imdbID}`} key={movie.imdbID}>
            <div className="hover-grow w-24 sm:w-32 md:w-48 pb-8 ">
              <img src={movie.Poster} alt={movie.Title} />
              <h2 className="text-center ">{movie.Title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
