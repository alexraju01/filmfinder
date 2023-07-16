import { Link } from "react-router-dom";

function Card({ item }) {
  const sourceUrl = "https://image.tmdb.org/t/p/w300/";
  return (
    <Link to={`/moviedetail/${item.id}`}>
      <div className="card">
        <img src={`${sourceUrl}${item.poster_path}`} alt="" className="moviePoster" />
      </div>
    </Link>
  );
}

export default Card;
