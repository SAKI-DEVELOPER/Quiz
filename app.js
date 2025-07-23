let questions = [

  {
    ques: "Waa maxay tiirka koowaad ee Islaamka?",
    options: [
      "Salaadda",
      "Soonka",
      "Shahaadada",
      "Xajka"
    ],
    correct: "Shahaadada"
  },

  {
    ques: "Immisa jeer ayay tahay in la tukado maalintii?",
    options: [
      "Labo jeer",
      "Shan jeer",
      "Saddex jeer",
      "Toddoba jeer"
    ],
    correct: "Shan jeer"
  },

  {
    ques: "Kitaabka Quraanka waxaa la soo dajiyay xilligee?",
    options: [
      "Bisha Rajab",
      "Bisha Shacbaan",
      "Bisha Ramadaan",
      "Bisha Dulxijjah"
    ],
    correct: "Bisha Ramadaan"
  },

  {
    ques: "Nabi Maxamed (CSW) wuxuu ahaa nabi kee ee lasoo diray?",
    options: [
      "Nabiga ugu horreeya",
      "Nabiga ugu dambeya",
      "Nabiga labaad",
      "Nabiga saddexaad"
    ],
    correct: "Nabiga ugu dambeya"
  },

  {
    ques: "Maxaa lagu dhaqmaa marka la galo masjidka?",
    options: [
      "In la fadhiisto",
      "In la ciyaaro",
      "In la tukado laba rakcadood",
      "In la hadlo"
    ],
    correct: "In la tukado laba rakcadood"
  },

  {
    ques: "Immisa suuradood ayuu ka kooban yahay Quraanka?",
    options: [
      "100 suuradood",
      "114 suuradood",
      "99 suuradood",
      "120 suuradood"
    ],
    correct: "114 suuradood"
  },

  {
    ques: "Waa kuma aabbaha Nabi Ismaaciil (CS)?",
    options: [
      "Nabi Nuux",
      "Nabi Ibraahim",
      "Nabi Muuse",
      "Nabi Da’uud"
    ],
    correct: "Nabi Ibraahim"
  },

  {
    ques: "Soonku waa waajib xilligee?",
    options: [
      "Bisha Shacbaan",
      "Bisha Rajab",
      "Bisha Ramadaan",
      "Bisha Safar"
    ],
    correct: "Bisha Ramadaan"
  },

  {
    ques: "Zakaatul Fidriga waa la bixiyaa goormee?",
    options: [
      "Bishii Ramadaan dhammaadkeeda",
      "Bil kasta",
      "Xilliga xajka",
      "Sannadkii mar"
    ],
    correct: "Bishii Ramadaan dhammaadkeeda"
  },

  {
    ques: "Masaajidka ugu horreeyay ee Islaamka waa?",
    options: [
      "Masjidka Xaramka",
      "Masjid Quba",
      "Masjid Nabawi",
      "Masjid Al-Aqsa"
    ],
    correct: "Masjid Quba"
  }

];


let myScore = 0;
let i = 0;
let quesCount = 0;

let content = document.getElementById("content");
let questionInput = document.getElementById("question");
let aInput = document.getElementById("a");
let bInput = document.getElementById("b");
let cInput = document.getElementById("c");
let dInput = document.getElementById("d");
let processBar = document.getElementById("state");
let processEl = document.getElementById("process");
let questionNo = document.getElementById("questionNo");
let scoreInput = document.getElementById("score");
let starter = document.getElementById("starter");
let restarter = document.getElementById("restarter");
let resultDashboard = document.getElementById("resultDashboard");
let title = document.getElementById("title");
let options = document.getElementById("options");
let clicked = document.querySelectorAll("button");


clicked.forEach( (arr, index) => {
    clicked[index].addEventListener("click", (event) => {
    let answer = clicked[index].innerText;
    let classAdd = clicked[index];
    if(quesCount < questions.length){
        let correct = questions[quesCount].correct;
        checkAnswer(answer, correct, classAdd);
        quesCount++;
    } else {
        gameOver();
        
        
    }
});
});



function checkAnswer(answer, correct, classAdd) {
    let processInput = i + 1;
    if(answer === correct){
        // console.log("Win");
        myScore++;
        console.log(questions.length);
        setTimeout(() => {
            classAdd.classList.add("right");       
            setTimeout(() =>{
                classAdd.classList.remove("right");
                process();
            }, 500);
                let correctSound = new Audio('correct.mp3');
                correctSound.play();
        },10);
        i++;
        startGame();
        
    }else {
        // console.log("Loose");
        setTimeout(() => {
            classAdd.classList.add("wrong");
            setTimeout(() =>{
                classAdd.classList.remove("wrong");
                process();
            }, 500);
            let wrongSound = new Audio('wrong.mp3');
                wrongSound.play();
        },10);
        i++;
        startGame();
    }
}

function process(){
    let realWidth = (100 / questions.length) * (i);
    processBar.style.width = `${realWidth}%`;
}

beforeAll();

function beforeAll(){
            questionInput.remove();
            aInput.remove();
            bInput.remove();
            cInput.remove();
            dInput.remove();
            questionNo.remove();
            processBar.remove();
            processEl.remove();
            restarter.remove();
}

starter.addEventListener("click", startGame);

restarter.addEventListener("click", startGame);

function startGame() {
    resultDashboard.classList.remove("resDash");
    scoreInput.classList.remove("scoreCentered");

    content.innerHTML = "";
        content.appendChild(title);
        content.appendChild(resultDashboard);
        resultDashboard.appendChild(questionNo);
        resultDashboard.appendChild(scoreInput);
        content.appendChild(questionInput);
        content.appendChild(options);
        content.appendChild(processEl);


        options.appendChild(aInput);
        options.appendChild(bInput);
        options.appendChild(cInput);
        options.appendChild(dInput);
        processEl.appendChild(processBar);


        title.classList.add("title");
        resultDashboard.classList.add("resultDashboard");
        questionNo.classList.add("questionNo");
        scoreInput.classList.add("score");
        questionInput.classList.add("question");
        aInput.classList.add("a");
        bInput.classList.add("b");
        cInput.classList.add("c");
        dInput.classList.add("d");
        processEl.classList.add("process");

if(i < questions.length){
            questionNo.textContent = `Question ${i + 1} of ${questions.length}`;
            scoreInput.textContent = `Score: ${myScore}`;
    switch(i){
        case i:
            questionInput.textContent = `${i + 1}: ${questions[i].ques}`;
            aInput.textContent = questions[i].options[0];
            bInput.textContent = questions[i].options[1];
            cInput.textContent = questions[i].options[2];
            dInput.textContent = questions[i].options[3];
            // console.log(i);
        break;

        default:
            gameOver();
        break;

    }
    
    }else {
            questionInput.remove();
            aInput.remove();
            bInput.remove();
            cInput.remove();
            dInput.remove();
            questionNo.remove();
        setTimeout(() => {

            processBar.remove();
            processEl.remove();
            gameOver();
        }, 1500);
        // console.log("I dont know what happen");
        
        
    }
}

    
    
function  gameOver() {
    // console.log("The questions end");
    quesCount = 0;
    i = 0;
    starter.remove();
    resultDashboard.classList.add("resDash");
    scoreInput.classList.add("scoreCentered");
    scoreInput.textContent = `Your Score is ${myScore} out of ${questions.length}`;
    content.appendChild(restarter);
    myScore = 0;
    questionNo.textContent = `Question 1 of ${questions.length}`;
    processBar.style.width = `0%`;
    
}




