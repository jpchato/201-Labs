'use strict'

// Lab 2 JS

var myArr = []

var visitor = prompt('What is your name?');
alert('Welcome ' + visitor + '. I hope you enjoy my webpage.');

var name = prompt('Is my last name Pena?');
var name_ = name.toLowerCase();
if (name_ === 'yes'){
  // console.log(name_ + ', my last name is pena ');
  alert('Yes, my last name is Pena'); 
  myArr.push(1);
} else if (name_ === 'no'){
  // console.log(' Incorrect, Pena is my last name');
  alert('Incorrect, my last name is Pena')
}
else{
  // console.log('yes or no answers only');
  alert('Yes or no answers only');
}

var school = prompt('Did I graduate from UC Santa Cruz?');
var school_ = school.toLowerCase();
if (school_ === 'yes'){
  // console.log('I attended but did not graduate from UC Santa Cruz');
  alert('I attended but did not graduate from UC Santa Cruz');
}
else if (school_ === 'no'){
  // console.log('Correct, I graduated from The Evergreen State College');
  alert('Correct, I graduated from The Evergreen State College');
  myArr.push(1);
}
else {
  // console.log('yes or no answers only');
  alert('yes or no answers only')
}

var service = prompt('Did I serve in the Army?');
var service_ = service.toLowerCase();
if (service_ === 'yes'){
  // console.log('Yes, I served in the Army');
  alert('Yes, I served in the Army');
  myArr.push(1);
}
else if (service_ === 'no'){
  // console.log('Incorrect, I served 4 years in the Army');
  alert('Incorrect, I served 4 years in the Army');
}
else {
  // console.log('yes or no answers only');
  alert('yes or no answers only');
}

var work = prompt('Did I work as the Hamburgler at kids parties?');
var work_ = work.toLowerCase();
if (work_ === 'yes'){
  // console.log('I didn\'t but it sounds fun');
  alert('I didn\'t but it sounds fun');
}
else if (work === 'no'){
  // console.log('Correct, I worked as a utility forester');
  alert('Correct, I worked as a utility forester');
  myArr.push(1);
}
else {
    // console.log('yes or no answers only');
    alert('yes or no answers only');
  }

var goal = prompt('Am I at CodeFellows to party?');
var goal_ = goal.toLowerCase();
if (goal_ === 'yes'){
  // console.log('I am not here to party, I\'m trying to get paid');
  alert('I am not here to party, I\'m trying to get paid');
}
else if (goal_ === 'no'){
  // console.log('Correct, I\'m here to learn how to code so I can build a better life');
  alert('Correct, I\'m here to learn how to code and so I can build a better life');
  myArr.push(1);
}
else{
  // console.log('yes or no answers only');
  alert('yes or no answers only')
}

// // Lab 3 Number Guessing Game

for (var i = 4; i > 0; i--){
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
  alert('The correct answer is 5')

// // lab3

for (var i=6; i>0; i--){
  var nostList = ['Final Fantasy 8', 'Tekken 5', 'Final Fantasy 14', 'Pokemon RBY', 'Final Fantasy 7', 'Marvel vs Capcom 2', 'Street Fighter 4'];
  var nostAnswer = prompt('What is one of my most nostalgic games?');
  if (nostAnswer==nostList[0] || nostAnswer==nostList[1] || nostAnswer==nostList[2] || nostAnswer==nostList[3] || nostAnswer==nostList[4] || nostAnswer==nostList[4] || nostAnswer==nostList[5] || nostAnswer==nostList[5] ||nostAnswer==nostList[6]){
    alert('I love that game!');
    myArr.push(1);
    break;
  }
}
alert('Games that inspire nostalgia: Final Fantasy 8, Tekken 5, Final Fantasy 14, Pokemon RBY, Final Fantasy 7, Marvel vs Capcom 2, Street Fighter 4 ')
alert('You answered ' + myArr.length + ' correctly')

alert('Goodbye ' + visitor + '. Think of me if you need to hire a software developer')