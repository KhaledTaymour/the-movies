import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { siteRoutes } from "../../constants";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(siteRoutes.home);
    }, 3000);
  }, []);

  return <h1>Page Not Found</h1>;
}

export default NotFound;
