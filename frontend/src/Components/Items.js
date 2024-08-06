import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../constants";

export default function Items() {
  const [movies1, setMovies1] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const [movies3, setMovies3] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/war`)
      .then((response) => response.json())
      .then((data) => setMovies1(data.Search || []))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/all`)
      .then((response) => response.json())
      .then((data) => setMovies2(data.Search || []))
      .catch((error) => console.error("Error in data-fetching", error));
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/are`)
      .then((response) => response.json())
      .then((data) => setMovies3(data.Search || []))
      .catch((error) => console.error("Error in data-fetching", error));
  }, []);

  return (
    <>
      <div
        className="text-white pt-[9em] pl-8 pr-8 sm:pt-16"
        style={{ backgroundColor: "rgb(24, 9, 41)" }}
      >
        <h1 className="text-3xl font-bold">Popular Movies</h1>
        <br />
        <div className="flex gap-10 overflow-x-scroll hide-scrollbar h-88">
          {movies1.map((movie) => (
            <Link to={`/Expand/${movie.imdbID}`} key={movie.imdbID}>
              <div className="hover-grow w-48 ">
                <img src={movie.Poster} alt={movie.Title} />
                <h2 className="text-center">{movie.Title}</h2>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-right ">
          <b>Swipe to see more Movies --</b>
        </p>
        <br />
        <h1 className="text-3xl font-bold">Trending</h1>
        <br />
        <div
          className="overflow-x-scroll hide-scrollbar rounded-2xl "
          style={{ backgroundColor: "rgb(45,45,45)" }}
        >
          <div className="flex gap-14 pt-6 pl-2 h-96">
            {movies2.map((movie) => (
              <Link to={`/Expand/${movie.imdbID}`} key={movie.imdbID}>
                <div className="hover-grow w-48">
                  <img src={movie.Poster} alt={movie.Title} />
                  <h2 className="text-center">{movie.Title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <p className="text-right ">
          <b>Swipe to see more Movies --</b>
        </p>
        <br />
        <h1 className="text-3xl font-bold">Explore</h1>
        <div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-6 pl-2 ">
            {movies3.map((movie) => (
              <Link to={`/Expand/${movie.imdbID}`} key={movie.imdbID}>
                <div className="hover-grow w-24 sm:w-32 md:w-48">
                  <img src={movie.Poster} alt={movie.Title} />
                  <h2 className="text-center ">{movie.Title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <br />
      </div>
      <div className="pb-8 pl-0 pr-0 text-white bg-black">
        <div className="flex justify-center">
          <div>
            <img
              className="h-24 w-24 rounded-full mt-8"
              src="https://t3.ftcdn.net/jpg/06/23/23/30/360_F_623233047_sSTT5ocMXKlH1FzoRj6pd1IurIcxJQ6h.jpg"
              alt="Movies Ocean Logo"
            />
          </div>
          <div className="text-white size-2xl font-bold text-2xl pl-3 mt-14">
            Movies_Ocean
          </div>
        </div>
        <div className="text-center pl-16 pr-16 pt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto
          nulla odit laudantium quisquam similique sapiente provident. Cumque
          aspernatur error, est dolore accusamus rem, voluptate exercitationem
          tenetur cum corrupti, omnis et repellendus repudiandae dicta.
          Repellendus alias placeat doloremque ipsam! Recusandae repudiandae non
          officia, reiciendis asperiores totam deleniti libero labore, eum qui
          et aliquid iure vero eos expedita veniam unde delectus!
        </div>
      </div>
    </>
  );
}
