export function createBreedItem(breed) {
  const breedItem = document.createElement("li");
  breedItem.className = "breed-item";

  const breedImage = document.createElement("img");
  breedImage.src = `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`;
  breedImage.alt = breed.name;

  const breedInfo = document.createElement("div");
  breedInfo.className = "breed-info";

  const breedName = document.createElement("h4");
  breedName.textContent = breed.name;

  const breedTemperament = document.createElement("p");
  breedTemperament.innerHTML = `<span class="highlight">Temperament:</span><br> ${breed.temperament}`;

  const breedBredFor = document.createElement("p");
  breedBredFor.innerHTML = `<span class="highlight">Role:</span><br>${breed.bred_for}`;

  breedInfo.appendChild(breedName);
  breedInfo.appendChild(breedTemperament);
  breedInfo.appendChild(breedBredFor);

  breedItem.appendChild(breedImage);
  breedItem.appendChild(breedInfo);

  return breedItem;
}

export function createBreedGroupButton(group) {
  const button = document.createElement("button");
  button.className = "breed-group-button";
  button.textContent = group;
  button.dataset.group = group;
  return button;
}

export function setActiveButton(selectedGroup) {
  const buttons = document.querySelectorAll(".breed-group-button");
  buttons.forEach((button) => {
    if (button.textContent === selectedGroup) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

export function setActiveLink(link) {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.classList.remove("active");
  });
  link.classList.add("active");
}
