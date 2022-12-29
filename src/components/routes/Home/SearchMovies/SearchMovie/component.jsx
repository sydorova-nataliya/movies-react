import { Link } from "react-router-dom";

import { calculatePopularity, convertDate, generateImageUrl, generateHref } from '../../../../../helpers/utils';

import './styles.scss'

const SearchMovie=({id, title, poster_path,original_title, vote_average, release_date, overview})=>{

  return (
    <>
      <div className="movie-item">
        <Link to={generateHref(id)}><img className="movie-item__photo" src={generateImageUrl(poster_path)} alt={title} loading="lazy"></img></Link>
          <div className="movie-item__wrapper">
            <Link to={generateHref(id)} className="movie-item__title">{original_title}</Link>
            <p className="movie-item__date">{convertDate(release_date)}</p>
            <p className="movie-item__rate">Rate: {calculatePopularity(vote_average)}</p>
            <p>{overview}</p>
          </div>
      </div>
    </>
  );
}

export default SearchMovie;
