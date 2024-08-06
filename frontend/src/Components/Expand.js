import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../constants";

export default function Expand() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/expand/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => console.error("Error fetching movie:", error));
  }, []);

  function bigger() {
    window.open(movie.Poster);
  }
  const IMAGE = "/download.png";

  return (
    <div
      className="  w-full h-full sm:h-screen text-white p-0 sm:p-20"
      style={{ backgroundColor: "rgb(24, 9, 41)" }}
    >
      <div className=" flex flex-col gap-14 pt-40 pr-12 pl-12 pb-12 sm:pt-16  sm:pr-4 sm:pl-4 sm:pb-24 sm:flex-row justify-between md:pl-24 md:pr-24">
        <div onClick={bigger}>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : IMAGE}
            alt={movie.Title}
          />
        </div>
        <div className=" text-white">
          <h1 className="text-3xl">{movie.Title}</h1>
          <br />
          <p>
            <u>
              <b>IMDB Rating </b>{" "}
            </u>{" "}
            - {movie.imdbRating}
          </p>
          <p>
            <u>
              <b>Genre </b>{" "}
            </u>{" "}
            - {movie.Genre}
          </p>
          <p>
            <u>
              <b>Director</b>
            </u>{" "}
            - {movie.Director}
          </p>
          <p>
            <u>
              <b>Actors </b>
            </u>{" "}
            - {movie.Actors}
          </p>
          <p>
            <u>
              <b>Plot </b>{" "}
            </u>{" "}
            - {movie.Plot}
          </p>
          <p>
            <u>
              <b>Year </b>{" "}
            </u>{" "}
            - {movie.Year}
          </p>
          <p>
            <u>
              <b>Language </b>
            </u>{" "}
            - {movie.Language}
          </p>
          <p>
            <u>
              <b>Country </b>
            </u>{" "}
            - {movie.Country}
          </p>
        </div>
      </div>
    </div>
  );
}
