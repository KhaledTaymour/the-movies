export default class TheMovies {
  constructor(page) {
    this.page = page;
    this.headerWebsiteName = page.locator(
      '[data-testid="header-website-name"]'
    );
    this.actionMoviesCarousel = page.locator(
      '[data-testid="movies-carousel__wrapper-action"]'
    );
    this.animationMoviesCarousel = page.locator(
      '[data-testid="movies-carousel__wrapper-animation"]'
    );
    this.musicalMoviesCarousel = page.locator(
      '[data-testid="movies-carousel__wrapper-musical"]'
    );
    this.avatarPosterImage = page.locator(
      'img[alt="Avatar: The Way of Water"]'
    );
    this.firstActionMovieCardLink = page.locator(
      ':nth-match([data-testid="movie-card__wrapper-link-action"], 1)'
    );
    this.firstActionMovieCard = page.locator(
      ':nth-match([data-testid="movies-carousel__wrapper-action"], 1) :nth-match([data-testid="movie-card__wrapper"], 1)'
    );
    this.firstAnimationMovieCard = page.locator(
      ':nth-match([data-testid="movies-carousel__wrapper-animation"], 1) :nth-match([data-testid="movie-card__wrapper"], 1)'
    );
    this.firstMusicalMovieCard = page.locator(
      ':nth-match([data-testid="movies-carousel__wrapper-musical"], 1) :nth-match([data-testid="movie-card__wrapper"], 1)'
    );
  }

  async goto() {
    return await Promise.all([
      this.page.goto("http://localhost:3000/#/"),
      this.page.waitForSelector('[data-testid="header-website-name"]', {
        state: "visible",
      }),
      this.page.waitForSelector(
        '[data-testid="movies-carousel__wrapper-action"]',
        {
          state: "visible",
        }
      ),
      this.page.waitForSelector(
        '[data-testid="movies-carousel__wrapper-animation"]',
        {
          state: "visible",
        }
      ),
      this.page.waitForSelector(
        '[data-testid="movies-carousel__wrapper-musical"]',
        {
          state: "visible",
        }
      ),
      // this.page.waitForSelector(
      //   ':nth-match([data-testid="movies-carousel__wrapper-action"], 1) :nth-match([data-testid="movie-card__wrapper"], 1)',
      //   { state: "visible" }
      // ),
      // this.page.waitForSelector(
      //   ':nth-match([data-testid="movies-carousel__wrapper-animation"], 1) :nth-match([data-testid="movie-card__wrapper"], 1)',
      //   { state: "visible" }
      // ),
      //   this.page.waitForSelector(
      //     ':nth-match([data-testid="movies-carousel__wrapper-musical"], 1) :nth-match([data-testid="movie-card__wrapper"], 1)',
      //     { state: "visible" }
      //   ),
      //   this.page.waitForSelector('[data-testid="language-changer-ddl"]', {
      //     state: "visible",
      //   }),
    ]);
  }

  async clickOnAvatar() {
    return await Promise.all([
      this.page.click('img[alt="Avatar: The Way of Water"]'),
      await this.page.waitForNavigation({
        url: "http://localhost:3000/#/moviedetails/76600",
      }),
    ]);
  }
}
