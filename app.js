// NOTES

// VARIABLES
// ================================================

// Create Global variables (correct, incorrect, timer, etc...)
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let seconds = 5;
let showCounter;
// Questions
let questions = [{
  question: "What was the first full length CGI movie?",
  answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
  correctAnswer: "Toy Story"
}, {
  question: "Which of these is NOT a name of one of the Spice Girls?",
  answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
  correctAnswer: "Fred Spice"
}, {
  question: "Which NBA team won the most titles in the 90s?",
  answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
  correctAnswer: "Chicago Bulls"
}, {
  question: "Which group released the hit song, \"Smells Like Teen Spirit\"?",
  answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
  correctAnswer: "Nirvana"
}, {
  question: "Which popular Disney movie featured the song, \"Circle of Life\"?",
  answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
  correctAnswer: "The Lion King"
}, {
  question: "Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\"",
  answers: ["Dice", "Mirror", "Fresh", "Cab"],
  correctAnswer: "Fresh"
}, {
  question: "What was Doug's best friend's name?",
  answers: ["Skeeter", "Mark", "Zach", "Cody"],
  correctAnswer: "Skeeter"
}, {
  question: "What was the name of the principal at Bayside High in Saved By The Bell?",
  answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
  correctAnswer: "Mr.Belding"
}];


// FUNCTIONS
// ================================================

// Create on click funtion for start button
$("#start").on("click", function(event){
  // Empty quiz area div
  $("#quiz-area").empty();
  // Populate quiz area div with timer
  startTimer();
  // 5. Actually start the timer using Set interval
  // 7. Display questions onto screen in the same click function
  $("#quiz-area").append(questions);
});

// Create setInterval function
function startTimer() {
  showCounter = setInterval(displayCounter, 1000);
};

function stopTimer() {
  clearInterval(showCounter);
};

// Create a displayCounter function to pass into interval (global func), this function will decrement the time and
// render onto screen remaining time
function displayCounter() {
  console.log(seconds);
  $("#quiz-area").html(seconds);
  seconds--;
  if(seconds < 0) {
    stopTimer();
  };
};



// const countDown = () => {
//   for (let i = 120; i >= 0; i--) {
//     console.log(seconds);
//     $("#quiz-area").html(seconds);
//     seconds--;
//   };
// };

// LOGIC
// ================================================
// 8. If count equals zero, compare user answers with the correct answers
// 9. Stop interval
// 10. clear the quiz area div using .empty()
// 11. populate div area with result (how many right/wrong)
