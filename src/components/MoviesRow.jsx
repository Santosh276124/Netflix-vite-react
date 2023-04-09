import React, {useState, useEffect } from 'react'
import './MoviesRow.css'
import CardItem from '../components/CardItem'
import axios from '../assets/axios'


function MoviesRow({title, fetchUrl, isLargeRow}) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
      const fetchData = async() => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);

        return request;
      }

      

      fetchData();

      

  }, [fetchUrl]);



  

  return (
    <div className='row'>
      <strong className='category'>{title}</strong>

      <div className='cards_row'>

        {
          movies.map((movie) => (

            

        
          
            <CardItem 
            key={movie.id}
            isLargeRow
            movie = {movie}
            genre = {movie.genre_ids}
         
            
            />
        
           ))
        }
        
        
        

      </div>
      
    </div>
  )
}

export default MoviesRow
