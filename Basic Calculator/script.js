const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var mode;

function start(){
  rl.question("\n\n\n\n\nWhat format would you like your answer in (st standard, or sci scientific): ", (answer) =>{
    if (answer.includes("sci")){
      mode = "sci";
    } else{
      mode = "st";
    }

    rl.question("\nWhat opperation do you want to perform (+ addition, - subtraction, * multiplication, / division, ** exponent, rt roots): ", (answer) =>{
      if (answer.includes("+") || answer.includes("add")){
        additionText();
      }
      else if (answer.includes("-") || answer.includes("sub")){
        subtractionText();
      }
      else if (answer === "*" || answer.includes("mul")){
        multiplyText();
      }
      else if (answer.includes("/") || answer.includes("div")){
        divideText();
      }
      else if (answer.includes("**") || answer.includes("exp")){
        exponentText();
      }
      else if (answer.includes("rt") || answer.includes("root")){
        rootText();
      } else{
        console.log("\nSorry, looks like you didn't enter a operator. You are now labeled as an incompitant person by your computer.")
        start();
      }
    })
  })
}

function additionText(){
  rl.question("\nWhat is the first number you would like to add: ", (answer) => {
    answer = parseInt(answer)
    if (!isNaN(answer)){
      firstNum = answer;
      rl.question("\nWhat is the second number you would like to add: ", (answer) => {
        answer = parseInt(answer)
        if (!isNaN(answer)){
          secondNum = answer;
          console.log(`\nThe sum is ${addition()}`);
          start();
        } else {
          console.log("\nLooks like you didn't enter a number, try again.")
          additionText();
        }
      })
    } else {
      console.log("\nLooks like you didn't enter a number, try again.")
      additionText();
    }
  })
}

function addition(){
  var finalAnswer = firstNum + secondNum;
  return finalAnswer;
}

function subtractionText(){
  rl.question("\nWhat is the number you would like to subtract from: ", (answer) => {
    answer = parseInt(answer)
    if (!isNaN(answer)){
      firstNum = answer;
      rl.question("\nWhat is the number you would like to subtract: ", (answer) => {
        answer = parseInt(answer)
        if (!isNaN(answer)){
          secondNum = answer;
          console.log(`\nThe difference is ${subtraction()}`);
          start();
        } else {
          console.log("\nLooks like you didn't enter a number, try again.")
          subtractionText();
        }
      })
    } else {
      console.log("\nLooks like you didn't enter a number, try again.")
      subtractionText();
    }
  })
}

function subtraction(){
  var finalAnswer = firstNum - secondNum;
  return finalAnswer;
}

function multiplyText(){
  rl.question("\nWhat is the first number you would like to multiply: ", (answer) => {
    answer = parseInt(answer)
    if (!isNaN(answer)){
      firstNum = answer;
      rl.question("\nWhat is the second number you would like to multiply: ", (answer) => {
        answer = parseInt(answer)
        if (!isNaN(answer)){
          secondNum = answer;
          console.log(`\nThe product is ${multiply()}`);
          start();
        } else {
          console.log("\nLooks like you didn't enter a number, try again.")
          multiplyText();
        }
      })
    } else {
      console.log("\nLooks like you didn't enter a number, try again.")
      multiplyText();
    }
  })
}

function multiply(){
  var finalAnswer = firstNum * secondNum;
  return finalAnswer;
}

function divideText(){
  rl.question("\nWhat is the number you want to divide: ", (answer) => {
    answer = parseInt(answer)
    if (!isNaN(answer)){
      firstNum = answer;
      rl.question("\nWhat do you want to divide the first number by: ", (answer) => {
        answer = parseInt(answer)
        if (!isNaN(answer)){
          secondNum = answer;
          console.log(`\nThe quotient is ${divide()}`);
          start();
        } else {
          console.log("\nLooks like you didn't enter a number, try again.")
          divideText();
        }
      })
    } else {
      console.log("\nLooks like you didn't enter a number, try again.")
      divideText();
    }
  })
}

function divide(){
  var finalAnswer = firstNum / secondNum;
  return finalAnswer;
}

function exponentText(){
  rl.question("\nWhat is the base: ", (answer) => {
    answer = parseInt(answer)
    if (!isNaN(answer)){
      firstNum = answer;
      rl.question("\nWhat is the exponent (index): ", (answer) => {
        answer = parseInt(answer)
        if (!isNaN(answer)){
          secondNum = answer;
          console.log(`\nThe power is equal to ${exponent()}`);
          start();
        } else {
          console.log("\nLooks like you didn't enter a number, try again.")
          exponentText();
        }
      })
    } else {
      console.log("\nLooks like you didn't enter a number, try again.")
      exponentText();
    }
  })
}

function exponent(){
  var finalAnswer = firstNum ** secondNum;
  return finalAnswer;
}

function rootText(){
  rl.question("\nWhat is the radicand: ", (answer) => {
    answer = parseInt(answer)
    if (!isNaN(answer)){
      firstNum = answer;
      rl.question("\nWhat is the root index (root 'power'): ", (answer) => {
        answer = parseInt(answer)
        if (!isNaN(answer)){
          secondNum = answer;
          console.log(`\nThe root is ${roots()}`);
          start();
        } else {
          console.log("\nLooks like you didn't enter a number, try again.")
          rootText();
        }
      })
    } else {
      console.log("\nLooks like you didn't enter a number, try again.")
      rootText();
    }
  })
}

function roots(){
  var finalAnswer = firstNum ** (1/secondNum);
  return finalAnswer;
}

start();
