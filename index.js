var score = 0;
var questionA = "am i vadapav " ;
var answerQuestionA = "yes";
var questionB = "whats yout fav color ";
var answerQuestionB = "red" var readlineSync = require('readline-sync');
;
// input

var userNameAge = readlineSync.question(questionA);
// processing
if (userNameAge === answerQuestionA){
  console.log("you are right");
  score = score + 1;
  console.log("score is " + score)
}else{
  console.log("you are wrong");
  score = score - 1
  console.log("score is " + score)
}
// var Score = 1;
var userFavColor = readlineSync.question(questionB)

if (userFavColor === answerQuestionB){
  console.log("you are right again");
  score = score + 1;
  console.log("your score is " + score)
} else {
  console.log("you are wrong");
  score = score - 1
  console.log("your score is = " + score)
}


// // var readlineSync = require('readline-sync');
//  var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
 

// output
