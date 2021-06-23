'use strict';

let score = 0;
alert("take a few second to guess who i'm ");

/*-------------- replytoFirstQuestion was added by the driver------------*/
let userName = prompt('What is your name?');
function replytoFirstQuestion(inputName) {
    return alert('You Are Welcom ' + inputName);
}
replytoFirstQuestion(userName);




let ans = prompt("Are you studied computer science ?")
/*-------------- replytoSecondQuestion was added by the driver------------*/
function replytoSecondQuestion() {
    switch (ans.toLowerCase()) {
        case 'yes':
        case 'y':
            alert('great',);
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
/*-------------- replytoThirdQuestion was added by the driver------------*/

function replytoThirdQuestion() {
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
}
replytoThirdQuestion(answer);



let answer1 = prompt('Are you Student at ASAC?');

/*-------------- replytoFourthQuestion was added by the driver------------*/

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
/*-------------- replytoFifthQuestion was added by the driver------------*/
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




let answer3 = prompt('we are ready !')
/*-------------- replytoSixthQuestion was added by the driver------------*/

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




/*add 6 question to let user guess and more about me*/



/*-------------- replytoSeventhQuestion was added by the driver------------*/
alert('We will play and u have 4 attempt to guess what the true number');
let UserAns = prompt('Guess Number between 1 to 10');

function replytoSeventhQuestion() {
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
}
replytoSeventhQuestion(UserAns);



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
alert('Great work ' + userName + ' and your score is ' + score);



/*=================This code was added by the Driver (Ahmad Jaber)===========Functions Lab04*/


let userInput = prompt('Enter your name again : ');

function reply(userName) {
    return alert('welcome ' + userName);
}
reply(userInput);

