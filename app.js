'use strict'

// Lab 2 JS

var visitor = prompt('What is your name?');

alert('Welcome ' + visitor + '. I hope you enjoy my webpage.');

var name = prompt('Is my last name Pena?');

var name_ = name.toLowerCase();

var myArr = []; // array for correct answers

function questions () {
  
  if (name_ === 'yes'){

  alert('Yes, my last name is Pena'); 
  myArr.push(1);
} else if (name_ === 'no'){

  alert('Incorrect, my last name is Pena')
}
else{

  alert('Yes or no answers only');
}

var school = prompt('Did I graduate from UC Santa Cruz?');
var school_ = school.toLowerCase();
if (school_ === 'yes'){

  alert('I attended but did not graduate from UC Santa Cruz');
}
else if (school_ === 'no'){

  alert('Correct, I graduated from The Evergreen State College');
  myArr.push(1);
}
else {

  alert('yes or no answers only')
}

var service = prompt('Did I serve in the Army?');
var service_ = service.toLowerCase();
if (service_ === 'yes'){

  alert('Yes, I served in the Army');
  myArr.push(1);
}
else if (service_ === 'no'){

  alert('Incorrect, I served 4 years in the Army');
}
else {

  alert('yes or no answers only');
}

var work = prompt('Did I work as the Hamburgler at kids parties?');
var work_ = work.toLowerCase();
if (work_ === 'yes'){

  alert('I didn\'t but it sounds fun');
}
else if (work === 'no'){

  alert('Correct, I worked as a utility forester');
  myArr.push(1);
}
else {

    alert('yes or no answers only');
  }

var goal = prompt('Am I at CodeFellows to party?');
var goal_ = goal.toLowerCase();
if (goal_ === 'yes'){

  alert('I am not here to party, I\'m trying to get paid');
}
else if (goal_ === 'no'){

  alert('Correct, I\'m here to learn how to code and so I can build a better life');
  myArr.push(1);
}
else{

  alert('yes or no answers only')
}
}
questions();

// // // Lab 3 Number Guessing Game

function guess () {for (var i = 4; i > 0; i--){
  var question = prompt('Guess a number between 1 - 10');
  var answer = '5';
  if (question < '5'){
    alert('Too low');

  }
  if (question > '5'){
    alert('Too high');

  }
  if (question == answer){
    alert('You got it right');

    myArr.push(1);
    break;
  }
}
}
guess ();
  alert('The correct answer is 5')

// // lab3

var nostList = ['Final Fantasy 8', 'Tekken 5', 'Final Fantasy 14', 'Pokemon RBY', 'Final Fantasy 7', 'Marvel vs Capcom 2', 'Street Fighter 4'];
function games () {for (var i=6; i>0; i--){

  var nostAnswer = prompt('What is one of my most nostalgic games?');
  if (nostAnswer==nostList[0] || nostAnswer==nostList[1] || nostAnswer==nostList[2] || nostAnswer==nostList[3] || nostAnswer==nostList[4] || nostAnswer==nostList[4] || nostAnswer==nostList[5] || nostAnswer==nostList[5] ||nostAnswer==nostList[6]){
    alert('I love that game!');

    myArr.push(1);
    break;
  }
}
}
games ();

alert('Games that inspire nostalgia: ' + nostList.toString());
alert('You answered ' + myArr.length + ' correctly');



alert('Goodbye ' + visitor + '. Think of me if you need to hire a software developer');
