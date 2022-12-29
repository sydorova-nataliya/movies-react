import { Route, Routes } from "react-router-dom";

import Home from "../../routes/Home";
import SearchMovies from "../../routes/Home/SearchMovies";
import DetailsMovie from '../../routes/Home/DetailsMovie'
import Error from "../../routes/Error";

import './styles.scss'

const HomePage=()=>  (
  
  <Routes>
    <Route path="/" element={<Home />} /> 

    <Route path="/search/:query" element={<SearchMovies />} /> 

    <Route path="/details/:movieId" element={<DetailsMovie />} />     
        
    <Route path="*" element={<Error />} />
  </Routes>

);

export default HomePage;