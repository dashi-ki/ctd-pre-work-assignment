function createBreedItem(breed) {
  const breedItem = document.createElement("li");
  breedItem.className = "breed-item";

  const breedImage = document.createElement("img");
  breedImage.src = `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`;
  breedImage.alt = breed.name;
  breedImage.width = 100;

  const breedInfo = document.createElement("div");
  breedInfo.className = "breed-info";

  const breedName = document.createElement("h4");
  breedName.textContent = breed.name;

  const breedTemperament = document.createElement("p");
  breedTemperament.textContent = `Temperament: ${breed.temperament}`;

  const breedBredFor = document.createElement("p");
  breedBredFor.textContent = `Bred for: ${breed.bred_for}`;

  breedInfo.appendChild(breedName);
  breedInfo.appendChild(breedTemperament);
  breedInfo.appendChild(breedBredFor);

  breedItem.appendChild(breedImage);
  breedItem.appendChild(breedInfo);

  return breedItem;
}

function createBreedGroupButton(group) {
  const button = document.createElement("button");
  button.className = "breed-group-button";
  button.textContent = group;
  button.dataset.group = group;
  return button;
}

function setActiveButton(selectedGroup) {
  const buttons = document.querySelectorAll(".breed-group-button");
  buttons.forEach((button) => {
    if (button.textContent === selectedGroup) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}
