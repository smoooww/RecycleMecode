const questions = [
    {
        question: 'How many types of plastic are there?',
        answers: [
            {text: '6', correct: false},
            {text: '7', correct: true},
            {text: '8', correct: false},
            {text: '9', correct: false},
        ]
    },
    {
        question: 'Which types of plastic are accepted at most recycling centers?',
        answers: [
            {text: '#1 PET (or PETE) and #2 HDPE', correct: true},
            {text: 'Only #3 PVC', correct: false},
            {text: 'None of them are recyclable, which is why they’re piling up in landfills.', correct: false},
            {text: 'All non-PVC plastics can be recycled throughout most of the United States.', correct: false},
        ]
    },
    {
        question: 'Which type of plastic is not easy to recycle?',
        answers: [
            {text: '#1 PET and #2 HDPE', correct: false},
            {text: '#3 PVC', correct: true},
            {text: '#5 PP', correct: false},
            {text: 'None of the above', correct: false},
        ]
    },
    {
        question: 'The "recycling label" has...',
        answers: [
            {text: 'One arrow', correct: false},
            {text: 'Two arrows', correct: false},
            {text: 'Three arrows', correct: true},
            {text: 'A tree', correct: false},
        ]
    },
    {
        question: 'Can you name the number 4 plastic?',
        answers: [
            {text: 'Polystyrene (PS)', correct: false},
            {text: 'Polyvinyl Chloride (PVC, Vinyl)', correct: false},
            {text: 'Low Density Polyethylene (LDPE)', correct: true},
            {text: 'Polypropylene (PP)', correct: false},
        ]
    },
    {
        question: 'Can you name the number 6 plastic?',
        answers: [
            {text: 'Polyethylene Terephthalate (PET)', correct: false},
            {text: 'High-Density Polyethylene (HDPE)', correct: false},
            {text: 'Other', correct: false},
            {text: 'Polystyrene (PS)', correct: true},
        ]
    },
    {
        question: 'Which of the following cannot be recycled?',
        answers: [
            {text: 'Baby bottles', correct: true},
            {text: 'Milk jugs', correct: false},
            {text: 'Water bottles', correct: false},
            {text: 'Shampoo bottles', correct: false},
        ]
    },
    {
        question: 'Can you name the number 7 plastic?',
        answers: [
            {text: 'Other', correct: true},
            {text: 'High-Density Polyethylene (HDPE)', correct: false},
            {text: 'Polyvinyl Chloride (PVC, Vinyl)', correct: false},
            {text: 'Polypropylene (PP)', correct: false},
        ]
    },
    {
        question: 'Can you name the number 2 plastic?',
        answers: [
            {text: 'Polyethylene Terephthalate (PET)', correct: false},
            {text: 'Polystyrene (PS)', correct: false},
            {text: 'High-Density Polyethylene (HDPE)', correct: true},
            {text: 'Polypropylene (PP)', correct: false},
        ]
    },
    {
        question: 'Of the billions of plastic products made each year, how much of it do you think ever gets recycled?',
        answers: [
            {text: '72%', correct: false},
            {text: '51%', correct: false},
            {text: '23%', correct: false},
            {text: '9%', correct: true},
        ]
    }
];
const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-btns');
const nextButton = document.getElementById('next-btn');

let score = 0;
let currentIndex = 0;
function startQuiz() {
    currentIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentIndex];
    let questionNumber = currentIndex + 1;
    questionElement.innerHTML = questionNumber + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButton.appendChild(button);
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
});
}
function resetState() {
    nextButton.style.display = 'none';
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
Array.from(answerButton.children).forEach(button => {
    button.disabled = true;
});
nextButton.style.display = 'block';
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play again"
    nextButton.style.display = 'block';
}
function handleNextButton() {
    currentIndex++;
    if(currentIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}
nextButton.addEventListener('click', () => {
    if(currentIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
}) 
startQuiz();