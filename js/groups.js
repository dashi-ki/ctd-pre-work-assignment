import {
  createBreedItem,
  createBreedGroupButton,
  setActiveButton,
} from "./ui_builder.js";

export function prepareGroups(breeds) {
  const groups = {};

  breeds.forEach((breed) => {
    // const group = breed.breed_group || "Unknown";
    const group = breed.breed_group;
    if (group) {
      if (!groups[group]) {
        groups[group] = [];
      }

      groups[group].push(breed);
    }
  });

  return groups;
}

export function populateBreedGroupButtons(groups) {
  const breedGroupButtonsDiv = document.getElementById("breed-group-buttons");

  for (const group in groups) {
    const button = createBreedGroupButton(group);
    button.addEventListener("click", (event) => {
      const selected = event.target.textContent;
      renderBreeds(selected, groups);
      setActiveButton(selected);
    });
    breedGroupButtonsDiv.appendChild(button);
  }
}

export function renderBreeds(selected, groups) {
  const list = document.getElementById("breed-list");
  list.innerHTML = ""; // clear current context

  const breeds = groups[selected] || [];
  breeds.forEach((breed) => {
    const breedItem = createBreedItem(breed);
    list.appendChild(breedItem);
  });
}
