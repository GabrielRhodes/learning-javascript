const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var costSegments;
var interestSegments;
var paymentSegments;
var cost;
var interest;
var mortgageInterval;
var payment;
var yearInterval;
var interestEachTime;
var interestAdditions;
var monthlyInterestRate;
var totalPaid = 0;
var monthsPassed = 0;

rl.question('\nHow much do you owe on your mortgage currently(USD): ', (answer) => {
  
  if (answer.includes("$")){
    costSegments = answer.split("$");
    cost = costSegments[1];
  } else{
    cost = answer;
  }

  rl.question('\nWhat is your mortgage interest rate: ', (answer) => {

    if (answer.includes("%")){
      interestSegments = answer.split("%");
      interest = 1 + interestSegments[0]/100;
    } else{
      interest = answer/100;
    }

    rl.question('\nHow often does your interest compound (Monthly, Weekly, Daily, or Continually): ', (answer) => {
      if (answer.toLowerCase().includes("month")){
        mortgageInterval = 12;
        yearInterval = 1/12;
      }
      else if (answer.toLowerCase().includes("week")){
        mortgageInterval = 52 + 1/7;
        yearInterval = 1/(52 + 1/7);
      }
      else if (answer.toLowerCase().includes("day")){
        mortgageInterval = 365;
        yearInterval = 1/365
      }
      else if (answer.toLowerCase().includes("contin")){
        mortgageInterval = 10000000;
        yearInterval = 1/10000000;
      } else{
        mortgageInterval = NaN;
      }

      rl.question('\nHow much will you pay off on your mortgage each month: ', (answer) => {
        if (answer.includes("$")){
          paymentSegments = answer.split("$");
          payment = paymentSegments[1];
        } else{
          payment = answer;
        }

        console.log(calculateTermCost(15));
        console.log(calculateTermCost(30));
        console.log(calculatePayoffTime());
      });
    });
  });
});

//Rendered useless, read the description again dumbass

function calculateTermCost(years){
  interestEachTime = 1 + interest/mortgageInterval;

  interestAdditions = (100 * interestEachTime ** (years / yearInterval))/100;

  return "\nYou will pay $" + Math.ceil(100 * interestAdditions * ((cost * 100 / (12 * years)) / 100)) / 100 + ` per month for ${years} years to pay off this mortgage`
}

function calculatePayoffTime(){
  monthlyInterestRate = (1 + interest/mortgageInterval) ** (mortgageInterval/12);

  if (payment <= (cost * monthlyInterestRate - cost)){
    console.log("\nSorry, looks like you won't be paying that mortgage off...ever");
  }
  else{
    while (cost > totalPaid){
      monthsPassed += 1;
      cost -= payment;
      cost = cost * monthlyInterestRate;
    }
    if (cost <= totalPaid){
      return "\nAfter " + Math.floor(monthsPassed/12) + " years and " + monthsPassed%12 + " months, you will have finished paying your mortgage! Now you can spend all that money on other things like a nice pillow!"
    }
  }
}
