import { useState } from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import data from "../utils/constants/data";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";



function Main() {
    const [movies, setMovies] = useState(data);
    return(
        <main>
            <Hero/>
            <Movies movies={movies} setMovies={setMovies}/>
            <AddMovieForm movies={movies} setMovies={setMovies}/>
        </main>
    )
}

function Home() {
    return(
        <div>
            <Main/>
        </div>
    );
}

export default Home;