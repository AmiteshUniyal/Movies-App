import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDropdown, setisDropdown] = useState(false);
  const [isDropdown_explore, setisDropdown_explore] = useState(false);

  const toggleDropdown = () => {
    if (isDropdown_explore) {
      setisDropdown_explore(!isDropdown_explore);
    }
    setisDropdown(!isDropdown);
  };

  const toggleDropdown_explore = () => {
    if (isDropdown) {
      setisDropdown(!isDropdown);
    }
    setisDropdown_explore(!isDropdown_explore);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const searching = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="fixed top-0 z-50 w-full h-auto flex flex-col gap-0 sm:gap-4 sm:flex-row p-1 bg-black md:gap-4 lg:gap-[16em] items-center justify-between ">
        <div className="text-white size-2xl font-bold text-2xl pl-2 ">
          Movies_Ocean
        </div>
        <form action="" className="flex p-2 gap-4">
          <input
            type="text"
            placeholder="Search Movies"
            className="text-white border-black sm:w-48 md:w-64 lg:w-96 border rounded p-1  "
            style={{ backgroundColor: "rgb(45,45,45)" }}
            value={searchTerm}
            onChange={searching}
          />
          <Link
            to={`${searchTerm ? `/Search/${searchTerm}` : "/"}`}
            key={searchTerm}
          >
            <input
              type="submit"
              value="Search"
              className="bg-gray-600 text-white rounded pr-2 pl-2"
            />
          </Link>
        </form>
        <div className="relative ml-3 p-1">
          <div className="flex gap-6">
            <button
              type="button"
              className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
            >
              <Link to={"/"}>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://imgs.search.brave.com/-g6uN8lRCdv1iv8pcArcTsiRbmr66bR0qYhFg_awgW8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FhL0hvbWVfaWNv/bl9ncmV5LnBuZw"
                  alt=""
                />
              </Link>
            </button>
            <button
              type="button"
              className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded={isDropdown_explore}
              aria-haspopup="true"
              onClick={toggleDropdown_explore}
            >
              <img
                className="h-8 w-8 rounded-full"
                src="https://imgs.search.brave.com/ewJA5uQdBSlC8AoVZ2cUyw2qoJZgomAFr7_0RcdNEN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZHJ5aWNvbnMu/Y29tL3VwbG9hZHMv/aWNvbi9wcmV2aWV3/Lzk4NjQvc21hbGxf/MXhfNTgwZTIyMGMt/NjI0ZS00OGZlLTk4/OTctYmM2NTFmNDkw/YzdkLnBuZw"
                alt=""
              />
            </button>
            <button
              type="button"
              className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded={isDropdown}
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              <img
                className="h-8 w-8 rounded-full"
                src="https://t3.ftcdn.net/jpg/06/23/23/30/360_F_623233047_sSTT5ocMXKlH1FzoRj6pd1IurIcxJQ6h.jpg"
                alt=""
              />
            </button>
          </div>
          <div
            className={`${
              isDropdown ? "block" : "hidden"
            } absolute  z-10 mt-4 w-64 h-[28em] sm:w-96 sm:h-auto sm:right-0 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            style={{ backgroundColor: "rgb(65,65,65)" }}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex="-1"
          >
            <div className=" h-96 flex-1 flex-col justify-center px-6 py-4 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-white">
                  Sign in to your account
                </h2>
              </div>

              <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <a
                          href="/"
                          className="font-semibold text-indigo-400 hover:text-indigo-300"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex mt-10 w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm mt-8 text-white">
                  Not a member?{" "}
                  <a
                    href="#"
                    className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
                  >
                    Start a 14 day free trial
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${
              isDropdown_explore ? "block" : "hidden"
            } absolute right-0 z-12 mt-4 w-48 h-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            style={{ backgroundColor: "rgb(65,65,65)" }}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex="-1"
          >
            <Link
              to={"/Action"}
              className="block px-4 py-2 text-sm text-white"
              role="menuitem"
              tabIndex="-1"
            >
              Action
            </Link>
            <Link
              to={"/Sci-Fi"}
              className="block px-4 py-2 text-sm text-white"
              role="menuitem"
              tabIndex="-1"
            >
              Sci-Fi
            </Link>
            <Link
              to={"/Horror"}
              className="block px-4 py-2 text-sm text-white"
              role="menuitem"
              tabIndex="-1"
            >
              Horror
            </Link>
            <Link
              to={"/Romance"}
              className="block px-4 py-2 text-sm text-white"
              role="menuitem"
              tabIndex="-1"
            >
              Romance
            </Link>
            <Link
              to={"/Comedy"}
              className="block px-4 py-2 text-sm text-white"
              role="menuitem"
              tabIndex="-1"
            >
              Comedy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
