let groups = {};

document.addEventListener("DOMContentLoaded", initializeApp);

async function initializeApp() {
  console.log("DOMContentLoaded");
  const dogLink = document.getElementById("breeds-link");
  const quizLink = document.getElementById("quiz-link");

  dogLink.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveLink(dogLink);
    switchTo("breeds");
  });

  quizLink.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveLink(quizLink);
    switchTo("quiz");
  });

  groups = await loadBreeds();
  setActiveLink(dogLink);
}

async function loadBreeds() {
  const breedsData = await fetchBreeds();
  groups = prepareGroups(breedsData);
  populateBreedGroupButtons(groups);

  const firstGroup = Object.keys(groups)[0];
  renderBreeds(firstGroup, groups);
  setActiveButton(firstGroup);

  return groups;
}

function switchTo(section) {
  const breedsSection = document.getElementById("breeds-section");
  const quizSection = document.getElementById("quiz-section");

  if (section === "breeds") {
    breedsSection.style.display = "block";
    quizSection.style.display = "none";
  } else {
    breedsSection.style.display = "none";
    quizSection.style.display = "block";
  }
}
