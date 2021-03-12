const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var store  = [], i, j, primes = [];
var primeNums = [];
var nextPrime = 10000000000000000;

function primeFactorsTo(max)
{
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    primeNums = primes;
    return primes;
}

rl.question('What number would you like to find the next prime for: \n', (answer) => {
  input = answer;
  primeFactorsTo(input * 2);
  primeNumsValues = primeNums.values()
  primeFinder(input);
  printPrime();

})

function primeFinder(input){
  for (const value of primeNumsValues){
    if (value > input && value < nextPrime){
      nextPrime = value;
    }
  }
}

function printPrime(){
  console.log("\nNext Prime: " + nextPrime);
}
