import { Movie } from "./movie.js";

const fallbackMovies = [
  new Movie(1, "Titanic", 100),
  new Movie(2, "Gudfadern", 120),
  new Movie(3, "Avatar", 150),
];

export async function getMovies() {
  try {
    const response = await fetch("http://localhost:3000/movies");

    if (!response.ok) {
      throw new Error("Kunde inte hämta filmer från API");
    }

    const data = await response.json();
    return data.map((movie) => new Movie(movie.id, movie.name, movie.price));
  } catch (error) {
    console.warn("Lokalt API kunde inte nås, använder fallback-data.");
    return fallbackMovies;
  }
}