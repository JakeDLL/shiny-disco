const randPhrases = [
    'What?',
    'Stop clicking me',
    'get some help',
    'what is my purpose?',
    'how did I get here?',
    'leave me alone now',
    'I need some space'
];

const btn = document.querySelector(".btn1");
const body = document.querySelector('.practice');
btn.addEventListener("click", () => {
    body.textContent = randPhrases[Math.floor(Math.random() * randPhrases.length)];
});