import React, { useEffect, useState } from "react";
import "./Banner.css";
import { IoPlaySharp } from "react-icons/io5";
import { BiInfoCircle } from "react-icons/bi";
import axios from "../assets/axios";
import requests from "../assets/Request";

function Banner() {
  const [movie, setMovie] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchtrending);
      
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    };

    

    fetchData();

    
  }, []);


  
  return (
    <div className="banner">
      <img
        className="banner_img"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path }`}
        alt="poster not found"
      />

      <div className="banner_details">
        <div className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </div>
        <div className="banner_desc">{movie.overview && movie.overview.length > 150?movie.overview.slice(0, 200).trim()+ '...' : movie.overview}</div>
        <div className="banner_btns">
          <button className="btn">
            <IoPlaySharp className="btn_icon" />
            <span>Play</span>
          </button>
          <button className="btn info_btn">
            <BiInfoCircle className="btn_icon" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
