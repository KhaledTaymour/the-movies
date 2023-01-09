import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MoviesCarousel.scss";
import MovieCard from "../MovieCard/MovieCard";
import LeftArrowUrl from "../../assets/images/left-arrow.svg";
import RightArrowUrl from "../../assets/images/right-arrow.svg";

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      src={LeftArrowUrl}
      alt="Previous"
      className={className}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      src={RightArrowUrl}
      alt="Previous"
      className={className}
      onClick={onClick}
    />
  );
}

function MoviesCarousel({ category, data, isLoading, hasError }) {
  const { innerWidth: windowWidth } = window;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // dots: true,
    centerPadding: "60px",
    slidesToShow: windowWidth < 1200 ? 1 : 5,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className={`movies-carousel__wrapper ${category.toLocaleLowerCase()}`}>
      <h3
        className={`movies-carousel__title ${category.toLocaleLowerCase()}-font`}
      >
        {category} Movies
      </h3>
      {isLoading && <h3>Loading ...</h3>}
      <Slider {...settings}>
        {data?.map((movie) => (
          <MovieCard key={movie.id} data={{ ...movie, category }} />
        ))}
      </Slider>
    </div>
  );
}

export default MoviesCarousel;
