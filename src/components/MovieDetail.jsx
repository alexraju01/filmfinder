import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const genreRequestEndpoint = "/genre/movie/list";
const sourceUrl = "https://image.tmdb.org/t/p/w300/";
function MovieDetail({ item }) {
  const [movie, setMovie] = useState({});

  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=3508cfeb65ea11a00fd1a52ff2ae124d`
      )
      .then((data) => {
        console.log(data.data);
        setMovie(data.data);
      });
  }, [params.id]);

  return (
    <div className="overviewContainer">
      <div>
        <img src={`${sourceUrl}${movie.poster_path}`} alt="" />
      </div>
      <div>
        <div className="title">
          <p>{movie.title}</p>
        </div>

        <div className="overview">
          <p>Overview:</p>
          <p>{movie.overview}</p>
        </div>

        <div className="releaseDate">
          <p>Release date:</p>
          <p>{movie.release_date}</p>
        </div>

        <div className="Rating">
          <p>{movie.vote_average}</p>
        </div>

        <section className="genre">
          {movie.genres?.map((genre) => (
            <p>{genre.name}</p>
          ))}
        </section>
      </div>
    </div>
  );
}

export default MovieDetail;
