let quiz = {};

const reloadButton = document.getElementById("reload-button");
const feedbackMessage = document.getElementById("feedback-message");

const quizCardTemplate = document.getElementById("quiz-card-template");
const quizImage = document.getElementById("quiz-image");
const answerButtons = [
  document.getElementById("answer-1"),
  document.getElementById("answer-2"),
  document.getElementById("answer-3"),
];

async function handleQuizUpdate() {
  const data = await fetchBreedForQuiz();
  console.log("new data", data);
  quiz = prepareQuiz(data);
  renderQuiz();
}

async function renderQuiz() {
  reloadButton.hidden = true;
  feedbackMessage.hidden = true;

  quizImage.src = quiz.answer.image;
  // answerButtons.forEach((button, index) => {
  //   button.textContent = quiz.names[index];
  //   button.addEventListener("click", (event) => {
  //     const selected = event.target.textContent;
  //     handleAnswer(button, selected, quiz.answer.name);
  //   });
  // });
  answerButtons.forEach((button, index) => {
    button.textContent = quiz.names[index];
    button.disabled = false;
    button.classList.remove("correct", "incorrect");
  });

  // quizCardTemplate.style.display = "block";

  // reloadButton.onclick = () => {
  //   handleReload();
  // };

  // spinner animation...?

  quizCardTemplate.style.display = "flex";
}

function prepareQuiz(data) {
  const answer = data[0];
  const names = data.map((item) => item.breeds[0].name);
  const groups = data.map((item) => item.breeds[0].breed_group);

  // names = shuffleArray(names);
  names.sort();

  const quiz = {
    answer: {
      image: answer.url,
      name: answer.breeds[0].name,
      group: answer.breeds[0].breed_group,
    },
    names: names,
    groups: groups,
  };
  console.log(quiz);
  return quiz;
}

function handleAnswer(button, selected) {
  console.log("handle answer, correct: ", quiz.answer.name);
  console.log("handle answer, selected: ", selected);
  if (selected === quiz.answer.name) {
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
    feedbackMessage.textContent = "Correct Answer: " + quiz.answer.name;
    feedbackMessage.hidden = false;
  }

  answerButtons.forEach((button) => (button.disabled = true));
  reloadButton.hidden = false;
}

async function handleReload() {
  quizCardTemplate.style.display = "none";
  answerButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("correct", "incorrect");
  });
  feedbackMessage.innerHTML = "";
  handleQuizUpdate();

  // const newQuizData = await fetchBreedForQuiz();
  // console.log("newQuizData");
  // console.log(newQuizData);
  // renderQuiz(newQuizData);
}

document.addEventListener("DOMContentLoaded", async () => {
  initializeListeners();
  await handleQuizUpdate();
});

function initializeListeners() {
  answerButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const selected = event.target.textContent;
      handleAnswer(button, selected);
    });
  });

  reloadButton.addEventListener("click", () => {
    handleReload();
  });
}
