export function updateSelectedCount(ticketPrice, countElement, totalElement) {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;

  countElement.textContent = selectedSeatsCount;
  totalElement.textContent = (selectedSeatsCount * ticketPrice);
}

export function renderMovies(movies, movieSelect) {
  movieSelect.innerHTML = "";

  for (const movie of movies) {
    const option = document.createElement("option");
    option.value = movie.price;
    option.textContent = `${movie.name} (${movie.price} kr)`;
    movieSelect.appendChild(option);
  }
}