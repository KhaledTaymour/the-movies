import axios from "axios";
import { genresIDs } from "./constants";

const API_KEY = "751debca5619fa8ccae1556214ddc206";

export const servicesURLs = {
  POPULAR_ACTION_MOVIES_URL: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genresIDs.action}`,
  POPULAR_ANIMATION_MOVIES_URL: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genresIDs.animation}`,
  POPULAR_MUSICAL_MOVIES_URL: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genresIDs.musical}`,
  MOVIE_POSTER_URL: `https://image.tmdb.org/t/p/w780{posterPath}`,
  MOVIE_BY_ID: `https://api.themoviedb.org/3/movie/{movieKey}?api_key=${API_KEY}`,
};

const getRequest = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPopularActionMovies = async () => {
  const { results } = await getRequest(servicesURLs.POPULAR_ACTION_MOVIES_URL);
  return results;
};

export const getPopularAnimationMovies = async () => {
  const { results } = await getRequest(
    servicesURLs.POPULAR_ANIMATION_MOVIES_URL
  );
  return results;
};

export const getPopularMusicalMovies = async () => {
  const { results } = await getRequest(servicesURLs.POPULAR_MUSICAL_MOVIES_URL);
  return results;
};

export const getMovieByID = async (movieKey) => {
  const url = servicesURLs.MOVIE_BY_ID.replace("{movieKey}", movieKey);
  return await getRequest(url);
};

export const commonReactQueryParams = {
  staleTime: 10 * (60 * 1000), // 10 mins
  cacheTime: 15 * (60 * 1000), // 15 mins
  refetchOnWindowFocus: false,
};
