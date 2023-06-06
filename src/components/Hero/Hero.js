/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import HeroStyled from "./Hero.styled";
import Heading from "../ui/Heading/Heading";
import Paragraph from "../ui/Paragraph/Paragraph";
import Image from "../ui/Image/Image";
import axios from "axios";

function Hero() {
  // membuat state movie
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(() => {
    getDetailMovie();
  }, []);
  
  // mendapatkan 1 data dari trending movies
  async function getTrendingMovies() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    const response = await axios(URL);
    // console.log(response.data.results[0]);
    return response.data.results[0];
  }

  // mendapatkan detail movie
  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    // fetch detail movie by id
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);

    setMovie(response.data)
  }

  return (
    <HeroStyled>
      <section>
        <div className="hero__left">
          <Heading size="md" color="webku" mb="2">{movie.title}</Heading>
          <Heading color="info">Genre: {genres}</Heading>
          <Paragraph color="webku" mb="2">{movie.overview}</Paragraph>
          <Button as="a" href={trailer} target="_blank" variant="webku" size="lg">Watch</Button>
        </div>
        <div className="hero__right">
          <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.Title}/>
        </div>
      </section>
    </HeroStyled>
  );
}

export default Hero;