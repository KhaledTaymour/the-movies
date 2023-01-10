import React from "react";
import { servicesURLs } from "../../services";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

function MovieCard({ data }) {
  return (
    <Link
      to={`/moviedetails/${data.id}`}
      state={{ category: data.category }}
      data-testid={`movie-card__wrapper-link-${data.category}`}
    >
      <div
        className={`movie-card__wrapper ${data.category}`}
        data-testid="movie-card__wrapper"
      >
        <img
          src={servicesURLs.MOVIE_POSTER_URL.replace(
            "{posterPath}",
            data.poster_path
          )}
          alt={data.title}
          className="movie-card__poster-image"
        />
        <section className="movie-card__info">
          <h3 className="movie-card__title">{data.title}</h3>
          <p className="movie-card__overview">{data.overview}</p>
          <h4 className="movie-card__rating">Rating: {data.vote_average}/10</h4>
        </section>
      </div>
    </Link>
  );
}

export default MovieCard;
