import {connect} from "react-redux";
import { useEffect } from "react";

import { generateUrl } from '../../../../helpers/utils';
import { setMovies } from '../../../../store/movies/actions';
import { selectMovies } from '../../../../store/movies/selector';
import Movie from './Movie';

import './styles.scss'

const Movies=({getMovie, title, setMovies, movies})=>{

  useEffect(()=>{
  fetch(generateUrl(getMovie))
      .then(res=>res.json())
      .then(data=>{setMovies(data)})
  },[])

  return (
    <div className='movies'>
      <h1 className='movies__title'>{title}</h1>
      <section className='movies__holder'>
          { 
            movies.length===0 ? 'Loading...' :
            movies.results.map((movie)=> 
            <Movie key={movie.id}{...movie}/>)
          }
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  movies: selectMovies(state),
})

const mapDispatchToProps = {
  setMovies,
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

