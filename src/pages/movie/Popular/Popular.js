/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../../components/Movies/Movies";
import Hero from "../../../components/Hero/Hero";
import ENDPOINTS from "../../../utils/constants/endpoints";

function Popular() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      getPopularMovies();
    }, []);

    async function getPopularMovies(){
        const response = await axios(ENDPOINTS.POPULAR);
        setMovies(response.data.results);
    }

    return (
        <div>
            <Hero />
            <Movies title="Popular Movie" movies={movies} />
        </div>
    );
}

export default Popular;