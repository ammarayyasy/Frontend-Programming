import Movie from "../Movie/Movie";
import Button from "../ui/Button/Button";
import Heading from "../ui/Heading/Heading";
import styles from "./Movies.module.css";

import { nanoid } from "nanoid";

function Movies(props) {
  // destructing data props
  const { movies, setMovies } = props;

  function handleClick() {
    const movie = {
      id: nanoid(),
      title: "Jigsaw",
      year: 2021,
      type: "movie",
      poster: "https://picsum.photos/300/400",
    };

    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <Heading size="md" color="webku" mb="2">Latest Movies</Heading>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        {/* button yang di klik nambah data */}
        <Button onClick={handleClick} variant="success" size="lg" half>Add Movie</Button>
      </section>
    </div>
  );
}

export default Movies;
