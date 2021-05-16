quizData = [
    { 
        question: 'What does "oxente" implies?',
        a: 'That somethings is right',
        b: 'That something does not make sense',
        c: 'That something is nice',
        d: 'That something is bad',
        correct_answer: 'b'
    }, {
        question: 'Where is the Amazon rainforest located?',
        a: 'North of Brazil',
        b: 'Southwest of Brazil',
        c: 'Northeast of Brazil',
        d: 'Elsewhere',
        correct_answer: 'a',
    }, {
        question: 'What is the most common female name in Brazil?',
        a: 'Ana',
        b: 'Sasha',
        c: 'Érica',
        d: 'Maria',
        correct_answer: 'd'
    }, {
        question: 'Who is the President of Brazil?',
        a: 'Adolf Hitler',
        b: 'Joseph Stalin',
        c: 'Jair Bolsonaro',
        d: 'Javou Bolsonaro',
        correct_answer: 'c'
    }, {
        question: 'Which one of these is not a slang from Brazil?',
        a: 'Cara',
        b: 'Mano',
        c: 'Dereguejohnson',
        d: 'Condoriano',
        correct_answer: 'd'
    }
]


const answerElms = document.querySelectorAll('.answer');
const questionElm = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit-btn');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionElm.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    //returns the correct answer
    let answer = undefined;

    answerElms.forEach((answerElm) => {
        if (answerElm.checked) {
            answer = answerElm.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    //deselect the radio buttons
    answerElms.forEach((answerEl) => {
        answerEl.checked = false
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct_answer) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions. Go you!</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});