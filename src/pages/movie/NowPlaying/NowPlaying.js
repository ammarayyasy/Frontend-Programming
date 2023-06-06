/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import axios from "axios";
import Movies from "../../../components/Movies/Movies";

function NowPlaying() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    async function getNowPlayingMovies() {
        const response = await axios(URL);
        setMovies(response.data.results)
    }

    return (
        <div>
            <Hero/>
            <Movies title="Now Playing" movies={movies} />
        </div>
    );
}

export default NowPlaying