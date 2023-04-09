
import './MainContainer.css'
import MoviesRow from './MoviesRow'
import requests from '../assets/Request'

function MainContainer() {

  

  return (
    <div className='main_container'>
        
      <MoviesRow 
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <MoviesRow 
        title='Trending Now'
        fetchUrl={requests.fetchtrending}
      
      />
      <MoviesRow 
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
    
      />
      <MoviesRow 
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
     
      />
      <MoviesRow 
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
     
      />
      <MoviesRow 
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
      
      />
      <MoviesRow 
        title='Romance Movies'
        fetchUrl={requests.fetchRamanceMovies}
      
      />
      <MoviesRow 
        title='Documentaries'
        fetchUrl={requests.fetchDocumentries}
      
      />
      
    </div>
  )
}

export default MainContainer
