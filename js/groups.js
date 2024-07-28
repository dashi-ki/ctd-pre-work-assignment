console.log("groups script loaded");

function prepareGroups(breeds) {
  const groups = {};

  breeds.forEach((breed) => {
    const group = breed.breed_group || "Unknown";
    if (!groups[group]) {
      groups[group] = [];
    }

    groups[group].push(breed);
  });

  return groups;
}

function populateBreedGroupButtons(groups) {
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

function renderBreeds(selected, groups) {
  console.log("renderBreeds", selected);
  const list = document.getElementById("breed-list");
  list.innerHTML = ""; // clear current context

  const breeds = groups[selected] || [];
  breeds.forEach((breed) => {
    const breedItem = createBreedItem(breed);
    list.appendChild(breedItem);
  });
}
