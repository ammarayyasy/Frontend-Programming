/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../../components/Movies/Movies";
import Hero from "../../../components/Hero/Hero";

function Popular() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      getPopularMovies();
    }, []);

    async function getPopularMovies(){
        const response = await axios(URL);
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