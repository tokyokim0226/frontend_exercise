const questions = [
    {
        question: "What is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is the heaviest animal on land?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: false},
            { text: "Elephant", correct: true},
            { text: "Giraffe", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
//BIGGEST TAKEAWAY
// DO NOT MIX UP WHETHER IT IS A CLASS OR A ID --> only give class for when
// different elements can possess the same clas
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// variables to store current question number and the score (# of questions answerred correctly) 
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();