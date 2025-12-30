let cardiD = 0;
let card = null;
let buttonID = "";
let quizCardNodes = null;

const cards = [
  {
    Question: "Wie heißt die Hauptstadt von Deutschland?",
    Answer1: "Hamburg",
    Answer2: "München",
    Answer3_Correct: "Berlin",
    Answer4: "Hannover",
  },
  {
    Question: "Wie heißt die Hauptstadt von Frankreich?",
    Answer1: "Marseille",
    Answer2: "Lyon",
    Answer3_Correct: "Paris",
    Answer4: "Bordeaux",
  },
];

function getNextCard() {
  let lastID = cards.length - 1;

  card = cards[cardiD];
  if (cardiD !== lastID) {
    cardiD++;
  } else {
    cardiD = 0;
  }

  buildCard(card);
}

function buildCard(card) {
  let quizContainer = document.getElementById("quiz-container");
  let textNode = null;

  reset();

  // Card
  let quizCard = document.createElement("div");
  quizCard.classList.add("card");
  quizCard.setAttribute("id", "card");

  //h1 id="question"
  let question = document.createElement("h1");
  question.setAttribute("id", "question");

  textNode = document.createTextNode(card.Question);
  question.appendChild(textNode);

  quizCard.appendChild(question);

  // div class="answer-buttons"
  let answers = document.createElement("div");
  answers.classList.add("answer-buttons");

  //buttons class="button" id="answer1...4"
  let button1 = document.createElement("button");
  button1.classList.add("button");

  buttonID = "answer1";
  button1.setAttribute("id", buttonID);
  button1.setAttribute("onclick", `checkAnswer("${buttonID}")`);
  textNode = document.createTextNode(card.Answer1);
  button1.appendChild(textNode);

  let button2 = document.createElement("button");
  button2.classList.add("button");

  buttonID = "answer2";
  button2.setAttribute("id", buttonID);
  button2.setAttribute("onclick", `checkAnswer("${buttonID}")`);
  textNode = document.createTextNode(card.Answer2);
  button2.appendChild(textNode);

  let button3 = document.createElement("button");
  button3.classList.add("button");

  buttonID = "answer3";
  button3.setAttribute("id", buttonID);
  button3.setAttribute("onclick", `checkAnswer("${buttonID}")`);
  textNode = document.createTextNode(card.Answer3_Correct);
  button3.appendChild(textNode);

  let button4 = document.createElement("button");
  button4.classList.add("button");

  buttonID = "answer4";
  button4.setAttribute("id", buttonID);
  button4.setAttribute("onclick", `checkAnswer("${buttonID}")`);
  textNode = document.createTextNode(card.Answer4);
  button4.appendChild(textNode);

  // Shuffle the buttons
  let buttons = [button1, button2, button3, button4];
  buttons = shuffle(buttons);

  answers.append(...buttons);
  quizCard.appendChild(answers);

  quizContainer.appendChild(quizCard);
}

function reset() {
  let card = document.getElementById("card");
  if (card !== null) {
    card.remove();
  }
}

function showAnswer() {
  quizCardNodes = document.querySelectorAll(".answer-buttons button");
  let correctAnswer = card.Answer3_Correct;

  if (quizCardNodes !== null) {
    quizCardNodes.forEach((element) => {
      if (element.innerHTML === correctAnswer) {
        element.classList.remove("wrong-answer");
        element.classList.add("correct-answer");
      } else {
        element.classList.remove("wrong-answer");
      }
    });
  }
}

function checkAnswer(id) {
  quizCardNodes = document.querySelectorAll(".answer-buttons button");
  let correctAnswer = card.Answer3_Correct;
  let element = document.getElementById(id);

  if (element.innerHTML === correctAnswer) {
    element.classList.add("correct-answer");
  } else {
    quizCardNodes.forEach((element) => {
      if (element.innerHTML === correctAnswer) {
        element.classList.add("correct-answer");
      } else {
        element.classList.add("wrong-answer");
      }
    });
  }
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
