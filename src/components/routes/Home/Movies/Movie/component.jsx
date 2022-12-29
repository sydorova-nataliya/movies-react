import { Link } from "react-router-dom";

import { calculatePopularity, convertDate, generateImageUrl, generateHref } from '../../../../../helpers/utils';

import './styles.scss'

const Movie=({id, title, poster_path,original_title, vote_average, release_date})=>{

  return (
    <>
      <div className="movie">
        <Link to={generateHref(id)}><img className="movie__photo" src={generateImageUrl(poster_path)} alt={title} loading="lazy"></img></Link>
        <br/><Link to={generateHref(id)}className="movie__title">{original_title}</Link>
        <span className="movie__popularity">{calculatePopularity(vote_average)}</span>
        <p className="movie__date">{convertDate(release_date)}</p>
      </div>
    </>
  );
}

export default Movie;
