'use strict';

let score = 0;
alert('take a few second to guess who i\'m ');

let userName = prompt('What is your name?');
function replytoFirstQuestion(inputName) {
  return alert('You Are Welcom ' + inputName);
}
replytoFirstQuestion(userName);

let ans = prompt('Are you studied computer science ?');
function replytoSecondQuestion() {
  switch (ans.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('great');
      score++;
      break;
    case 'no':
    case 'n':
      alert('you need more focus');
      break;
    default:
      alert('wrong answer');
  }
}
replytoSecondQuestion(ans);

let answer = prompt('your age 25 ?');
function replytoThirdQuestion() {
  switch (answer.toUpperCase()) {
    case 'YES':
    case 'Y':
      alert('you got alegal age ');
      score++;
      break;
    case 'NO':
    case 'N':
      alert('you are not allowd to enter');
      break;
    default:
      alert('You Enter wrong answer');
  }
}
replytoThirdQuestion(answer);



let answer1 = prompt('Are you Student at ASAC?');
function replytoFourthQuestion() {
  switch (answer1.toUpperCase()) {
    case 'YES':
    case 'Y':
      alert('Welcome');
      score++;
      break;
    case 'NO':
    case 'N':
      alert('Join Us Pleas');
      break;
    default:
      alert('You Enter wrong answer');
  }
}
replytoFourthQuestion(answer1);

let answer2 = prompt('this is first time to creat website');
function replytoFifthQuestion() {
  switch (answer2.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Ok we will start');
      score++;
      break;
    case 'no':
    case 'n':
      alert('Hope you enjoy');
      break;
    default:
      alert('wrong answer');
  }
}
replytoFifthQuestion(answer2);

let answer3 = prompt('we are ready !');
function replytoSixthQuestion() {
  switch (answer3.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Lets go');
      score++;
      break;
    case 'no':
    case 'n':
      alert('oops');
      break;
    default:
      alert('You Enter wrong answer');
  }
}
replytoSixthQuestion(answer3);

alert('We will play and u have 4 attempt to guess what the true number');
let UserAns = prompt('Guess Number between 1 to 10');
function replytoSeventhQuestion() {
  for (let i = 0; i < 3; i++) {
    if (UserAns == 5) {
      alert('Bravoo you guess true number ' + UserAns); // display the answer from the user
      score++;
      break;
    }
    else if (UserAns <= 2) {
      alert('its too low, guess the number again ' + UserAns); // display the answer from the user
      UserAns = prompt('Guess Number between 1 to 10 '); // display the answer from the user
    }
    else if (UserAns >= 8) {
      alert('too high, guess the number again ' + UserAns);
      UserAns = prompt('Guess Number between 1 to 10 '); // display the answer from the user
    }
    else {
      alert('you enter wrong number ' + UserAns);
      UserAns = prompt('Guess Number between 1 to 10 '); // display the answer from the user
    }
  }
}
replytoSeventhQuestion(UserAns);

alert('We will take qick quiz at math and you have 6 attempt if your answer is false');
alert('what is the result for this equation (20/4-1)');

let Test = ['4', '2', '5', '10']; // edit array in the loop
let correct = false;
for (let i = 0; i < 6; i++) {
  let question7 = prompt('whats your answer ?', 'you have 6 tries');
  for (let j = 0; j < Test.length; j++) {
    if (question7 == Test[j]) {
      alert('Correct Answer, ' + question7);
      score++;
      correct = true;
      i = 7;
      break;
    }
  }
}
alert('Great work ' + userName + ' and your score is ' + score);

let userInput = prompt('Enter your name again : ');
function reply(userName) {
  return alert('welcome ' + userName);
}
reply(userInput);
