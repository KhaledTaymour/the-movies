import React from "react";
import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
// Pages & Components
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import About from "./pages/About/About";
import WishList from "./pages/WishList/WishList";
import NotFound from "./pages/NotFound/NotFound";
import ErrorFallback from "./components/ErrorFallback/ErrorFallback";
//
import { WishListProvider } from "./context/WishContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { siteRoutes } from "./constants";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <WishListProvider>
        <QueryClientProvider client={queryClient}>
          <HashRouter>
            <div className="App">
              <Routes>
                <Route exact path={siteRoutes.home} element={<Home />} />
                <Route
                  exact
                  path={siteRoutes.moviedetails}
                  element={<MovieDetails />}
                />
                <Route
                  exact
                  path={siteRoutes.wishlist}
                  element={<WishList />}
                />
                <Route exact path={siteRoutes.about} element={<About />} />
                <Route
                  exact
                  path={siteRoutes.anyOtherPath}
                  element={<NotFound />}
                />
              </Routes>
            </div>
          </HashRouter>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </WishListProvider>
    </ErrorBoundary>
  );
};

export default App;
