import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "axios";
import requests from "../Requests";
function Banner() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // @ts-ignore
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        // @ts-ignore
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movies?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {
            // @ts-ignore
            movies?.title ||
              // @ts-ignore
              movies?.name ||
              // @ts-ignore
              movies.original_name
          }
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">
          {truncate(
            // @ts-ignore
            movies?.overview,
            150
          )}
        </h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
