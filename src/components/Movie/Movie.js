import Heading from "../ui/Heading/Heading";
import Paragraph from "../ui/Paragraph/Paragraph";
import Image from "../ui/Image/Image";
import StyledMovie from "./Movie.styled";


function Movie(props) {
    const {movie} = props;

    return (
        <StyledMovie>
            <Image src={movie.poster} alt={movie.title}/>
            <Heading>{movie.title}</Heading>
            <Paragraph color="secondary">{movie.year}</Paragraph>
          </StyledMovie>
    )
}

export default Movie;