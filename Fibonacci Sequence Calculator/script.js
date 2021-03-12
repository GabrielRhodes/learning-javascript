/*
Fibonacci Sequence Calculator
The questions and inputs need some work and can be improved. The returned values are accurate though so the hard part is done at least.
Inputs could be broadened a bit, but for now this works.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var fibonacci_sequence = [];

var fibonacci_number;

rl.question('Do you want to see all the fibonacci sequence values up to a certain amount, or only the number at the spot you input? (all or one): ', (answer) => {
  if (answer === "all" || answer === 'ALL' || answer === "All"){
    rl.question('How many numbers in the fibonacci sequence do you want to see: ', (answer) => {
      var numbers_requested = answer
      findFibonacciExtended(answer);
      if (numbers_requested > 0 && numbers_requested < 1024){
        console.log(`The first ${numbers_requested} digits of the fibonacci sequence are: ${fibonacci_sequence}`);
      }
      rl.close();
    });
  }
  else if (answer === "1" || answer === "one" || answer === "One" || answer === "ONE"){
    rl.question('How many numbers in the fibonacci sequence do you want to see?: ', (answer) => {
      var number_requested = answer
      findFibonacciNum(answer);
      if (number_requested % 10 === 1){
        console.log(`The ${number_requested}st number of the fibonacci sequence is: ${fibonacci_number}`);
      }
      else if (number_requested % 10 === 2){
        console.log(`The ${number_requested}nd number of the fibonacci sequence is: ${fibonacci_number}`);
      }
      else if(number_requested % 10 === 3){
        console.log(`The ${number_requested}rd number of the fibonacci sequence is: ${fibonacci_number}`);
      }
      else{
        console.log(`The ${number_requested}th number of the fibonacci sequence is: ${fibonacci_number}`);
      }
      rl.close();
    });
  }
});

function findFibonacciNum(number){

  var fibonacci_sequence_number = 0;
  var first_num = 0;
  var second_num = 1;
  while (fibonacci_sequence_number + 2 < number){
    first_num += second_num;
    fibonacci_sequence_number += 1;
    second_num += first_num;
    fibonacci_sequence_number += 1;
  }
  if (first_num > second_num) {
    fibonacci_number = first_num;
  }
  else{
    fibonacci_number = second_num;
  }
}

function findFibonacciExtended(number){
  var fibonacci_sequence_numbers = 0;
  var first_num = 0;
  var second_num = 1;
  fibonacci_sequence += `${first_num}, `;
  fibonacci_sequence += `${second_num}, `;
  while (fibonacci_sequence_numbers + 2 < number){
    first_num += second_num;
    fibonacci_sequence += `${first_num}, `;
    fibonacci_sequence_numbers += 1;
    second_num += first_num;
    fibonacci_sequence += `${second_num}, `;
    fibonacci_sequence_numbers += 1;
  }
}
