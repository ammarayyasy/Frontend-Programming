/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import HeroStyled from "./Hero.styled";
import Heading from "../ui/Heading/Heading";
import Paragraph from "../ui/Paragraph/Paragraph";
import Image from "../ui/Image/Image";

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
          <Heading size="md" color="webku" mb="2">{movie.Title}</Heading>
          <Heading color="info">Genre: {movie.Genre}</Heading>
          <Paragraph color="webku" mb="2">{movie.Plot}</Paragraph>
          <Button variant="webku" size="lg">Watch</Button>
        </div>
        <div className="hero__right">
          <Image src="https://picsum.photos/536/354" alt={movie.Title}/>
        </div>
      </section>
    </HeroStyled>
  );
}

export default Hero;