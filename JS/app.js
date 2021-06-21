'use strict';

alert("take a few second to awnser the following questions ")

let userName = prompt('What is your name?');
alert('You Are Welcom ' + userName)
//console.log(userName)

let ans = prompt("Are you excited to be a web developer ?");

switch (ans.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('you are allowed to get in')
        break;

    case 'no':
    case 'n':
        alert('you are not allowed to get in');
        break;

    default:
        alert('wrong answer');
}


let answer = prompt('Are you feel good today');

switch (answer.toUpperCase()){

    case 'YES':
    case 'Y':
        alert('Great');
        break;

    case 'NO':
    case 'N':
        alert('Oops')
        break;

     default:
        alert('You Enter wrong answer');
}

let answer1 = prompt('Are you Student at ASAC?');

switch (answer1.toUpperCase()){

    case 'YES':
    case 'Y':
        alert('Welcome')
        break;

    case 'NO':
    case 'N':
        alert('Join Us Pleas')
        break;

     default:
            alert('You Enter wrong answer');
}

let answer2 = prompt('is it your first time visiting my WEBSITE?');

switch (answer2.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('Ok we will start')
        break;

    case 'no':
    case 'n':
        alert('Hope you enjoy')
        break;

    default:
            alert('wrong answer');
}

let answer3 = prompt('Are you ready?')

switch (answer3.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('Lets go')
        break;

    case 'no':
    case 'n':
        alert('You Enter wrong answer')
        break;

    default:
            alert('You Enter wrong answer');
}