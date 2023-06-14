<script>
  // Sample car data
  const cars = [
    { name: "Car 1", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", rating: "4/5" },
    { name: "Car 2", review: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: "3.5/5" }
  ];

  // Function to generate car cards based on data
  function generateCarCards() {
    const carContainer = document.querySelector(".car-container");

    cars.forEach((car) => {
      const carCard = document.createElement("div");
      carCard.classList.add("car-card");

      const carTitle = document.createElement("h2");
      carTitle.textContent = car.name;

      const carReview = document.createElement("p");
      carReview.textContent = "Review: " + car.review;

      const carRating = document.createElement("p");
      carRating.textContent = "Rating: " + car.rating;

      carCard.appendChild(carTitle);
      carCard.appendChild(carReview);
      carCard.appendChild(carRating);

      carContainer.appendChild(carCard);
    });
  }

  // Call the function to generate car cards
  generateCarCards();
</script>
