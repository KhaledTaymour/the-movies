import React from "react";
import "./Home.scss";
import MoviesCarousel from "../../components/MoviesCarousel/MoviesCarousel";
import { moviesCategories } from "../../constants";
import { useQuery } from "@tanstack/react-query";
import {
  commonReactQueryParams,
  getPopularActionMovies,
  getPopularAnimationMovies,
  getPopularMusicalMovies,
} from "../../services";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Home() {
  const actionQuery = useQuery({
    queryKey: [moviesCategories.action],
    queryFn: getPopularActionMovies,
    ...commonReactQueryParams,
  });
  const animationQuery = useQuery({
    queryKey: [moviesCategories.animation],
    queryFn: getPopularAnimationMovies,
    ...commonReactQueryParams,
  });
  const musicalQuery = useQuery({
    queryKey: [moviesCategories.music],
    queryFn: getPopularMusicalMovies,
    ...commonReactQueryParams,
  });

  return (
    <>
      <Header />
      <div className="home__wrapper">
        <MoviesCarousel
          key={"action"}
          category={"action"}
          data={actionQuery.data}
          isLoading={actionQuery.isLoading}
          hasError={actionQuery.isError}
        />
        <MoviesCarousel
          key={"animation"}
          category={"animation"}
          data={animationQuery.data}
          isLoading={animationQuery.isLoading}
          hasError={animationQuery.isError}
        />
        <MoviesCarousel
          key={"musical"}
          category={"musical"}
          data={musicalQuery.data}
          isLoading={musicalQuery.isLoading}
          hasError={musicalQuery.isError}
        />
      </div>
      <Footer />
    </>
  );
}

export default Home;
