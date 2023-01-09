import React, { useEffect, useState } from "react";
import "./MovieDetails.scss";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import {
  commonReactQueryParams,
  getMovieByID,
  servicesURLs,
} from "../../services";
import { useWishList } from "../../context/WishContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function MovieDetails() {
  const { id } = useParams();
  const {
    state: { category },
  } = useLocation();
  const { wishList, addToWishList, removeFromWishList } = useWishList();
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    if (wishList.findIndex((movie) => movie.id === id) === -1) {
      setIsAdd(true);
    } else {
      setIsAdd(false);
    }
  }, [id, wishList]);

  const movieQuery = useQuery({
    queryKey: ["movie-details", id],
    queryFn: () => getMovieByID(id),
    ...commonReactQueryParams,
  });

  function addRemoveInWishList() {
    if (isAdd) {
      addToWishList({ id, title: movieQuery.data.title, category });
    } else {
      removeFromWishList(id);
    }
  }

  return (
    <>
      <Header />
      <div className={`movie-details__wrapper ${category}`}>
        {movieQuery.data ? (
          <>
            <section className="movie-details__card">
              <p className="movie-details__category">{category}</p>
              <img
                src={servicesURLs.MOVIE_POSTER_URL.replace(
                  "{posterPath}",
                  movieQuery.data.poster_path
                )}
                alt={movieQuery.data.title}
                className="movie-details__poster"
              />
              <section className="movie-details__info">
                <h3 className="movie-details__title">
                  {movieQuery.data.title}
                </h3>
                <article className="movie-details__overview">
                  {movieQuery.data.overview}
                </article>
                <button
                  className="movie-details__button"
                  onClick={addRemoveInWishList}
                >
                  {isAdd ? "Add" : "Remove"}
                </button>
              </section>
            </section>
            <section className="movie-details__additional-info">
              <p>Released on {movieQuery.data.release_date}</p>
              <p>Rating: {movieQuery.data.vote_average} / 10</p>
              <p>Duration: {movieQuery.data.runtime} minutes</p>
              {movieQuery.data.homepage && (
                <a href={movieQuery.data.homepage}>Movie Website</a>
              )}
            </section>
          </>
        ) : (
          <p>Loading</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default MovieDetails;
