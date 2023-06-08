/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import axios from "axios";
import Movies from "../../../components/Movies/Movies";
import ENDPOINTS from "../../../utils/constants/endpoints";

function NowPlaying() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    async function getNowPlayingMovies() {
        const response = await axios(ENDPOINTS.NOWPLAYING);
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