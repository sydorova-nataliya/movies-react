import {useParams, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import {connect} from "react-redux";

import { generateSearch } from '../../../../helpers/utils';
import { selectSearchMovies } from '../../../../store/movies/selector';
import { setSeacrhMovies } from '../../../../store/movies/actions';
import Header from '../../../shared/Header';
import Footer from '../../../shared/Footer';
import SearchMovie from './SearchMovie';

import './styles.scss';

const SearchMovies=({search,setSeacrhMovies })=> {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    fetch(generateSearch(params.query.slice(1)))
        .then(res=>res.json())
        .then(data=>{setSeacrhMovies(data.results)})
        .finally(()=> setLoading(false))
    },[params.query])
      
while(loading  || search===[]){
  return (
    <h1>Loading...</h1>
  )
}
  return (
    <>
      <Header />
        <main>
          <Link to='/' className="error__btn">Back to Home</Link>
          <div className='search'>
            {
              search.length===0? <h3 className='no-movies'>There is no such movie!</h3>:
              search.map(movie=>
                <SearchMovie key={movie.id}{...movie}/>)
            }
          </div>
        </main>
      <Footer />
    </>
  );
}

const mapStateToProps = state => ({
  search: selectSearchMovies(state),
})

const mapDispatchToProps = {
  setSeacrhMovies,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies);


