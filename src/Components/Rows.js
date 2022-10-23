import React,{useState,useEffect} from 'react'
import axiosinstance from '../axios'
import './Rows.css'

const base_url="https://image.tmdb.org/t/p/original/"

function Rows({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([])
    
    useEffect(()=>{
        async function fetchData(){
            const request=await axiosinstance.get(fetchUrl);
            setMovies(request.data.results);  //data.results is from the console(console.log(requests)) where movie list is shown
            return request;
        }
        fetchData()
    },[fetchUrl])
    

  return (
    <div className="row">
          <h2>{title}</h2>

          <div className='row-posters'>
            {movies.map(movie=>(
              <img 
              key={movie.id} 
              className={`row-poster ${isLargeRow && "row-posterlarge"}`}
              src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`}
              alt={movie.name}></img>
            ) )}
          </div>
    </div>
  )
}

export default Rows