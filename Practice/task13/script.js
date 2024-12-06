const cars = [
  { make: "Audi", model: "R8", passengers: 2, luggage: 2, fuel: "Petrol", transmission: "Automatic", airConditioning: "Yes", price: 2058, image: "images/audiR8.jpeg" },
  { make: "Citroen", model: "2CV", passengers: 4, luggage: 1, fuel: "Petrol", transmission: "Manual", airConditioning: "No", price: 25, image: "images/Citroen.jpeg" },
  { make: "Kia", model: "Niro EV", passengers: 5, luggage: 2, fuel: "Electric", transmission: "Automatic", airConditioning: "Yes", price: 102, image: "images/kiaNiro.jpeg" },
  { make: "Kia", model: "Picanto", passengers: 4, luggage: 1, fuel: "Petrol", transmission: "Manual", airConditioning: "No", price: 65, image: "images/kiapicanto.jpg" },
  { make: "Lamborghini", model: "Aventador", passengers: 2, luggage: 0, fuel: "Petrol", transmission: "Automatic", airConditioning: "Yes", price: 4280, image: "images/lamborghiniaventador.jpg" },
  { make: "Lexus", model: "NX", passengers: 5, luggage: 2, fuel: "Hybrid", transmission: "Automatic", airConditioning: "Yes", price: 163, image: "images/lexusnx.jpg" },
  { make: "Polestar", model: "Polestar 2", passengers: 5, luggage: 3, fuel: "Electric", transmission: "Automatic", airConditioning: "Yes", price: 120, image: "images/polestar2.jpg" },
  { make: "Land Rover", model: "Defender", passengers: 5, luggage: 4, fuel: "Petrol", transmission: "Automatic", airConditioning: "Yes", price: 260, image: "images/randroverDefender.jpg" },
  { make: "VW", model: "Caravelle", passengers: 9, luggage: 4, fuel: "Petrol", transmission: "Manual", airConditioning: "No", price: 250, image: "images/vwcaravelle.jpg" },
  { make: "VW", model: "Golf", passengers: 5, luggage: 2, fuel: "Petrol", transmission: "Automatic", airConditioning: "Yes", price: 134, image: "images/vwgolf.jpg" },
  { make: "Toyota", model: "Yaris", passengers: 5, luggage: 2, fuel: "Hybrid", transmission: "Automatic", airConditioning: "Yes", price: 93, image: "images/yaris.jpg" },
];

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const passengers = parseInt(document.getElementById("passengers").value);
  const luggage = parseInt(document.getElementById("luggage").value);
  const fuel = document.getElementById("fuel").value;
  const transmission = document.getElementById("transmission").value;
  const airConditioning = document.getElementById("airConditioning").value;
  const price = parseInt(document.getElementById("price").value);

  const results = cars.filter(car => {
    return (
      car.passengers >= passengers &&
      car.luggage >= luggage &&
      (fuel === "Any" || car.fuel === fuel) &&
      (transmission === "Any" || car.transmission === transmission) &&
      (airConditioning === "Any" || car.airConditioning === airConditioning) &&
      car.price <= price
    );
  });

  displayResults(results);
});

function displayResults(results) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (results.length === 0) {
    resultsDiv.innerHTML = "<p>No cars match your preferences.</p>";
    return;
  }

  results.forEach(car => {
    const carDiv = document.createElement("div");
    carDiv.className = "car";
    carDiv.innerHTML = `
      <img src="${car.image}" alt="${car.make} ${car.model}">
      <h2>${car.make} ${car.model}</h2>
      <p>Passengers: ${car.passengers}</p>
      <p>Luggage: ${car.luggage}</p>
      <p>Fuel: ${car.fuel}</p>
      <p>Transmission: ${car.transmission}</p>
      <p>Air Conditioning: ${car.airConditioning}</p>
      <p>Price: £${car.price}</p>
    `;
    resultsDiv.appendChild(carDiv);
  });
}
