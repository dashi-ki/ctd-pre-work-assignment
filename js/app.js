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
  console.log(groups);
});
