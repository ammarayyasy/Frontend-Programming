import Heading from "../ui/Heading/Heading";
import Paragraph from "../ui/Paragraph/Paragraph";
import Image from "../ui/Image/Image";
import StyledMovie from "./Movie.styled";
import { Link } from "react-router-dom";


function Movie(props) {
    const {movie} = props;

    return (
        <StyledMovie>
            <Image src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
            <Link to={`/movie/${movie.id}`}>
                <Heading>{movie.title}</Heading>
            </Link>
            <Paragraph color="secondary">{movie.year || movie.release_date.substring(0, 4)}</Paragraph>
          </StyledMovie>
    )
}

export default Movie;