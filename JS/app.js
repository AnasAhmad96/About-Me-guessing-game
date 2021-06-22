'use strict';

let score = 0;
alert("take a few second to guess who i'm ");

let userName = prompt('What is your name?');
alert('You Are Welcom ' + userName);



let ans = prompt("Are you studied computer science ?")

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

let answer = prompt('your age 25 ?');
switch (answer.toUpperCase()) {
    case 'YES':
    case 'Y':
        alert('you got alegal age ');
        score++;
        break;
    case 'NO':
    case 'N':
        alert('you are not allowd to enter')
        break;
    default:
        alert('You Enter wrong answer');
}

let answer1 = prompt('Are you Student at ASAC?');

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

let answer2 = prompt('this is first time to creat website');
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

let answer3 = prompt('we are ready !')
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
/*add 6 question to let user guess and more about me*/
alert('We will play and u have 4 attempt to guess what the true number');
let UserAns = prompt('Guess Number between 1 to 10');
for (let i = 0; i < 3; i++) {
    if (UserAns == 5) {
        alert('Bravoo you guess true number');
        score++;
        break;
    }
    else if (UserAns <= 2) {
        alert('its too low, guess the number again');
        UserAns = prompt('Guess Number between 1 to 10');
    }
    else if (UserAns >= 8) {
        alert('too high, guess the number again');
        UserAns = prompt('Guess Number between 1 to 10');
    }
    else {
        alert('you enter wrong number');
        UserAns = prompt('Guess Number between 1 to 10');
    }
}

alert('We will take qick quiz at math and you have 6 attempt if your answer is false');
let testanswer = prompt('what is the result for this equation (10*2/4 = "4,2,5,10")');
let Test = [4, 2, 5, 10];
for (let index = 5; index >= 0; index--) {
    if (index == 5) {
        alert('Your answer is correct, you are great');
        score++;
        break;
    }
    else if (index !== 5) {
        alert('Your answer is not correct');
        testanswer = prompt('what is the result for this equation (10*2/4 = "4,2,5,10")');
    }
    else {
        alert('ops');
    }
}
alert('Great work ' + userName + 'and your score is ' + score);
}

