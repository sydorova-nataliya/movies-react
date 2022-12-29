import {useParams, Link } from 'react-router-dom';
import {connect} from "react-redux";
import { useEffect } from "react";

import { generateUrl, calculatePopularity,convertDate,generateImageUrl } from '../../../../helpers/utils';
import { selectDetailsMovie } from '../../../../store/movies/selector';
import { setDetailsMovie } from '../../../../store/movies/actions';
import Header from '../../../shared/Header';
import Footer from '../../../shared/Footer';

import './styles.scss';

const DetailsMovie=({details,setDetailsMovie })=> {
  const params = useParams();

  useEffect(()=>{
    fetch(generateUrl(params.movieId))
        .then(res=>res.json())
        .then(data=>{setDetailsMovie(data)})
    },[])

  return (
    <>
    {
      Object.keys(details).length === 0 ? <h1>Loading...</h1> : 
        <>
          <Header />
          <main >
            <div className='movie-detail'>
              <div className="movie-details" >
                <img className="movie-details__photo" src={generateImageUrl(details.backdrop_path)} alt={details.title} loading="lazy"></img>
  
                <div className="wrapper">
                  <a className="movie-details__title" >{details.original_title}</a>
                  <div className='movie-details__holder'>
                    <p className="movie-details__popularity">Rate: {calculatePopularity(details.vote_average)}</p>
                    <p className="movie-details__date">{convertDate(details.release_date)}</p>
                    <p className="movie-details__tagline">{details.tagline}</p>
                  </div>
                  <h4 className="movie-details__overview">Overview</h4>
                  <p className="movie-details__overview-text">{details.overview}</p>
                  <h4 className="movie-details__genres">Genres:</h4>
                  <ul className="movie-details__list">
                    {
                      details.genres.map(({name}) => <li key={name} className="movie-details__list-item">{name}</li>)
                    }
                  </ul>
                  <p className="movie-details__status">Status: {details.status}</p>
                
                  {
                    details.homepage==='' ? '': 
                      <>
                        <span>Website: </span>
                        <a href={details.homepage} className="movie-details__homepage">{details.homepage}</a>
                      </>
                  } 
              </div> 
             </div>
            </div>
            <Link to='/' className="error__btn">Back to Home</Link>
          </main>
        <Footer />
      </>
    }
    </>
  );
}

const mapStateToProps = state => ({
  details: selectDetailsMovie(state),
})

const mapDispatchToProps = {
  setDetailsMovie,
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsMovie);


