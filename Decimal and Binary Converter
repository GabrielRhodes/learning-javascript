const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var newNumber = 0;

rl.question('Are you converting a binary number or a decimal number: ', (answer) => {
  answer = answer.toLowerCase();
  if (answer.includes("bi")){
    rl.question('What number do you want to convert: ', (answer) => {
      convertToBinary(answer);
    });
  }
  else if (answer.includes("de")){
    rl.question('What number do you want to convert: ', (answer) => {
      convertToDeciimal(answer);
    });
  } else {
    console.log("\nWell, looks like you misspelled or are trying to mess with this converter. If it's the former, please rerun the program...if it's the later, stop trying to destroy my baby!!!");
  }
});

function convertToBinary(number){
  var powerOfTwo = 0;
  while (number - 2 ** powerOfTwo >= 0){
    powerOfTwo += 1;
  }
  if (number - 2 ** powerOfTwo < 0){
    newNumber += 1 * 10 ** (powerOfTwo - 1);
    number -= 2 ** (powerOfTwo - 1);
    if (number > 0){
      convertToBinary(number);
    }
  }
  if (number === 0){
    printNewNumber(newNumber)
  }
}

function convertToDeciimal(number){
  var length = number.length;
  if (number.charAt(0) === "1"){
    newNumber += 2 ** (length - 1);
    number = number.substring(1);
    if (number != ""){
      convertToDeciimal(number);
    } else{
      printNewNumber(newNumber);
    }
  }
  else if (number.charAt(0) === "0"){
    number = number.substring(1);
    if (number != ""){
      convertToDeciimal(number);
    } else{
      printNewNumber(newNumber);
    }
  }
}

function printNewNumber(number){
  console.log("Your number converted is: " + number);
}
