import React from "react";
import "./WishList.scss";
import { useWishList } from "../../context/WishContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function WishList() {
  const { wishList, removeFromWishList } = useWishList();
  return (
    <>
      <Header />
      <ul className="wish-list__wrapper">
        <h2>Wish List</h2>
        {wishList.length ? (
          wishList?.map((movie) => (
            <li key={movie.id} className="wish-list__movie-list">
              <p className="wish-list__movie-name">{movie.title}</p>
              <button onClick={() => removeFromWishList(movie.id)}>
                Remove From Wish List
              </button>
            </li>
          ))
        ) : (
          <p>No Movies in your Wish List, Try to add some</p>
        )}
      </ul>
      <Footer />
    </>
  );
}

export default WishList;
