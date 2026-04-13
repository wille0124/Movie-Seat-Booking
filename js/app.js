import { getMovies } from "./api.js";
import { renderMovies, updateSelectedCount } from "./ui.js";

const container = document.querySelector("#seat-container");
const countElement = document.querySelector("#count");
const totalElement = document.querySelector("#total");
const movieSelect = document.querySelector("#movie");

let ticketPrice = 0;

container.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (
    target.classList.contains("seat") &&
    !target.classList.contains("occupied")
  ) {
    target.classList.toggle("selected");
    updateSelectedCount(ticketPrice, countElement, totalElement);
  }
});

movieSelect.addEventListener("change", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLSelectElement)) {
    return;
  }

  ticketPrice = Number(target.value);
  updateSelectedCount(ticketPrice, countElement, totalElement);
});

async function init() {
  try {
    const movies = await getMovies();
    renderMovies(movies, movieSelect);

    ticketPrice = Number(movieSelect.value);
    updateSelectedCount(ticketPrice, countElement, totalElement);
  } catch (error) {
    console.error(error);
  }
}

init();