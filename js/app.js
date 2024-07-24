const actionButton = document.getElementById("action-button");

const breedsUrl = "https://api.thedogapi.com/v1/breeds";

actionButton.addEventListener("click", (event) => {
  fetchInfoFrom(breedsUrl);
});

function fetchInfoFrom(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log("error fetching breeds"));
}

// on page load
console.log("script is connected");
