import React from "react";
import "./CardItem.css";
import { IoPlaySharp, IoAddSharp, IoChevronDown } from "react-icons/io5";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

import genreList from '../assets/GenreList'

function CardItem(props) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  const { movie, isLargeRow = false } = props;

  const filterGenre = (id) => {
    // console.log(id)
   return genreList.filter((genre)=> {
      // console.log(genre.id === id)
      return genre.id === id;
    })

    
  }


  return (
    <div className="card">
      <img
        className="card_poster"
        src={`${BASE_URL}${movie.backdrop_path}`}
        alt={movie.name}
      />

      <div className="card_info">
        <div className="action_row">
          <div className="action_row">
            <button className="play">
              <IoPlaySharp className="btn_icon" />
            </button>
            <button className="add outline_btn">
              <IoAddSharp className="btn_icon" />
            </button>
            <button className="like outline_btn">
              <AiOutlineLike className="btn_icon" />
            </button>
            <button className="dislike outline_btn">
              <AiOutlineDislike className="btn_icon" />
            </button>
          </div>
          <button className="drop_down outline_btn">
            <IoChevronDown className="btn_icon" />
          </button>
        </div>
        <div className="text_details">
          <strong>{movie?.title || movie?.name || movie?.original_name}</strong>
          <div className="desc">
            <span className="green_text">{`${Math.trunc(
              movie.vote_average * 10
            )}% match`}</span>
          </div>

          <div className="desc">

            {
              movie.genre_ids.map((id, index)=> {
                  const isLast = index === movie.genre_ids.length - 1;
                  let genre = filterGenre(id);

                  return (
                    <div className="desc" key={index}>
                      
                        <span className="genre">{genre[0].name}</span>
                        {!isLast && <div className="dot">•</div>}
                    </div>
                  );
              })
            }
    
          </div>

        </div>
      </div>
    </div>
  );
}

export default CardItem;
