import React from "react";
import "./Header.scss";
import WishListLogoUrl from "../../assets/images/wish-list.svg";
import { siteRoutes } from "../../constants";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__wrapper">
      <Link to={siteRoutes.home}>
        <h1 data-testid="header-website-name">The Movies</h1>
      </Link>
      <Link to={siteRoutes.wishlist}>
        <img
          src={WishListLogoUrl}
          title="Wish List"
          className="header__wish-list-logo"
        />
      </Link>
    </div>
  );
}

export default Header;
