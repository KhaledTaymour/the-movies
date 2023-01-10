## The movies

A web app showing movies categorized by genre and providing info about them an giving the opportunity of adding to your wish list.
Technically it is built with plain ES6 + React + Webpack without biolerplate as CRA.

### Deployed Link

https://khaledtaymour.github.io/the-movies/

### Tech Stack

- Javascript ES6
- React 18
- Webpack 5

### Webpack Configuration

|                                                          |                                           |
| -------------------------------------------------------- | ----------------------------------------- |
| babel-loader                                             | Transpiler                                |
| MiniCssExtractPlugin.loader, "css-loader", "sass-loader" | style file loaders                        |
| url-loader                                               | files & images loader                     |
| HtmlWebpackPlugin                                        | to import index.html file inside index.js |

See `webpack.config.js` file for more.

### Main packages used

|                                |                       |
| ------------------------------ | --------------------- |
| react, react-dom               | UI Library            |
| react-router, react-router-dom | For pages routing     |
| axios                          | HTTP Client           |
| react-query                    | Data Fetching Library |
| react-slick, slick-carousel    | carousel library      |
| sass                           | css preprocessor      |

### Features

This site show 3 movies' categories; action, animation, and musical.
<br/>
It shows each category in a carousel that's navigatable by the arrows, and shows 20 movie cards for each carousel.
The data comes from TMDB.
<br/>
The user can click on a movie card, the page will route to a movie's details page for more info about the movie, in addition to the ability to add/remove to the user's wishlist.
<br/>
The details page have a distinct color, fonts and look-and-feel depending on the category of the movie.
<br/>
The Wishlist is accessible by clicking on its icon on the header, and the user have the ability to remove movies from it.

### How to use it?

You can clone or download the repo. Then to run it you can run the command `npm start` which will run webpack in dev mode, or you can create a build by running `npm run build`
