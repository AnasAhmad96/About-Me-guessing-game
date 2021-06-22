'use strict';

alert("take a few second to awnser the following questions ")

let userName = prompt('What is your name?');
alert('You Are Welcom ' + userName)
//console.log(userName)

let ans = prompt("Are your stidied computer science  ?");

switch (ans.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('wonderful')
        break;

    case 'no':
    case 'n':
        alert('be focus');
        break;

    default:
        alert('wrong answer');
}


let answer = prompt('your age 25 ?');

switch (answer.toUpperCase()){

    case 'YES':
    case 'Y':
        alert('Great');
        break;

    case 'NO':
    case 'N':
        alert('you are not allowd to enter')
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

let answer3 = prompt('we are read !')

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
