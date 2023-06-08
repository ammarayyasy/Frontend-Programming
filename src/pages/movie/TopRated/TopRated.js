/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import Movies from "../../../components/Movies/Movies";
import ENDPOINTS from "../../../utils/constants/endpoints";

function TopRated() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTopRatedMovies();
    }, [])
  
      async function getTopRatedMovies(){
          const response = await axios(ENDPOINTS.TOPRATED);
          setMovies(response.data.results);
      }

    return (
        <div>
            <Hero/>
            <Movies title="Top Rated" movies={movies}/>
        </div>
    );
}

export default TopRated;