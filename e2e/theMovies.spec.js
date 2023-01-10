import TheMovies from "./TheMovies";
import { test, expect } from "@playwright/test";

test.describe("The Movies Page", () => {
  test.skip("should renders smoothly", async ({ page }) => {
    const theMoviesPage = new TheMovies(page);
    await theMoviesPage.goto();

    await expect(theMoviesPage.headerWebsiteName).toBeVisible();
    await expect(theMoviesPage.actionMoviesCarousel).toBeVisible();
    await expect(theMoviesPage.animationMoviesCarousel).toBeVisible();
    await expect(theMoviesPage.musicalMoviesCarousel).toBeVisible();
  });

  test("should navigate to Avatar Movie", async ({ page }) => {
    const theMoviesPage = new TheMovies(page);
    await theMoviesPage.goto();

    await theMoviesPage.clickOnAvatar();

    expect(page.url()).toContain("moviedetails");
  });
});
