/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import HeroStyled from "./Hero.styled";

function Hero() {
  // membuat state movie
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    // Melakukan Fetch data dari API omdb.
    const response = await fetch(url);
    const data = await response.json();

    // Update state movie dengan data movie (hasil fetch)
    setMovie(data);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  // Tampilkan state movie.
  console.log(movie);
  return (
    <HeroStyled>
      <section>
        <div className="hero__left">
          <h2>{movie.Title}</h2>
          <h3>Genre: {movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <Button variant="webku" size="lg">Watch</Button>
        </div>
        <div className="hero__right">
          <img
            src="https://picsum.photos/536/354"
            alt={movie.Title}
          />
        </div>
      </section>
    </HeroStyled>
  );
}

export default Hero;