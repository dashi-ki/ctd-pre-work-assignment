// TODO: confirm it's okay to use async in event listener
document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOMContentLoaded");
  const dogLink = document.getElementById("breeds-link");
  const breedsSection = document.getElementById("breeds-section");
  const quizLink = document.getElementById("quiz-link");
  const quizSection = document.getElementById("quiz-section");

  dogLink.addEventListener("click", (event) => {
    event.preventDefault();
    show("breeds");
  });

  quizLink.addEventListener("click", (event) => {
    event.preventDefault();
    show("quiz");
  });

  function show(section) {
    if (section === "breeds") {
      breedsSection.style.display = "block";
      quizSection.style.display = "none";
    } else {
      breedsSection.style.display = "none";
      quizSection.style.display = "block";
    }
  }

  show("breeds");
  const breedsData = await fetchBreeds();
  const groups = prepareGroups(breedsData);

  // configure breed selections
  populateBreedGroupButtons(groups);

  // Select the first group by default
  const firstGroup = Object.keys(groups)[0];
  renderBreeds(firstGroup, groups);
  setActiveButton(firstGroup);

  console.log(groups);
});

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
