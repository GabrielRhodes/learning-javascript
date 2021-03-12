const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var store  = [], i, j, primes = [];
var primeNums = [];
var primeFactors = [];

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

rl.question('What number would you like to find the prime factorization of: \n', (answer) => {
  input = answer;
  primeFactorsTo(input);
  primeNumsValues = primeNums.values()
  primeFactorFinder(input);
  printFactors();

})

function primeFactorFinder(input){
  for (const value of primeNumsValues){
    if (input%value === 0){
      input = input/value;
      primeNums.unshift(0);
      primeFactors.push(value);
      primeFactorFinder(input);
    }
  }
}

function printFactors(){
  console.log("\nPrime Factors: " + primeFactors);
}
