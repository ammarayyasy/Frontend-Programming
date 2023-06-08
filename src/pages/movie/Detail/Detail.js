/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import DetailMovie from "../../../components/DetailMovie/DetailMovie";
import { useParams } from "react-router-dom";
import axios from "axios";
import Movies from "../../../components/Movies/Movies";
import ENDPOINTS from "../../../utils/constants/endpoints";

function Detail() {
    const {id} = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        getRecomMovies();
    }, [id]);

    async function getRecomMovies() {
        const response = await axios(ENDPOINTS.RECOMMENDATION(id));
        setMovies(response.data.results)
    }

    return(
        <>
            <DetailMovie/>
            <Movies title="Recommendation Movie" movies={movies}/>
        </>
    )
}

export default Detail;