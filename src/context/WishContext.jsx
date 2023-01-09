import { createContext, useContext, useState } from "react";
import React from "react";

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  return (
    <WishListContext.Provider
      value={{
        wishList,
        addToWishList: ({ id, title, category }) => {
          if (wishList.findIndex((movie) => movie.id === id) === -1) {
            setWishList((prev) => [...prev, { id, title, category }]);
          }
        },
        removeFromWishList: (id) => {
          setWishList((prev) => prev.filter((movie) => movie.id !== id));
        },
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

// custom hook
export const useWishList = () => useContext(WishListContext);
