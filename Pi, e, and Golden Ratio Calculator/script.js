const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What number whould you like to find digits of? pi, e, or the golden ratio (gr)?', (answer) => {
  if (answer === "e" || answer === 'E'){
    rl.question('How many digits of e would you like to see? (Max is 16)', (answer) => {
      digits_requested = parseInt(answer);
      e_digits = Math.round(Math.E * (10 ** (digits_requested - 1)))/ 10 ** (digits_requested - 1)
      if (digits_requested > 0 && digits_requested <= 16){
        console.log(`The first ${digits_requested} digits of e are: ${e_digits}`);
      }
      rl.close();
    });
  }
  if (answer === "pi" || answer === 'PI' || answer === "Pi"){
    rl.question('How many digits of pi would you like to see? (Max is 16)', (answer) => {
      digits_requested = parseInt(answer);
      pi_digits = Math.round(Math.E * (10 ** (digits_requested - 1)))/ 10 ** (digits_requested - 1)
      if (digits_requested > 0 && digits_requested <= 16){
        console.log(`The first ${digits_requested} digits of pi are: ${pi_digits}`);
      }
      rl.close();
    });
  }
  if (answer === "golden ratio" || answer === 'gr' || answer === "Golden Ratio" || answer === "GOLDEN RATIO"){
    rl.question('How many digits of the golden ratio would you like to see? (Max is 16)', (answer) => {
      digits_requested = parseInt(answer);
      golden_ratio_digits = Math.round((1 + Math.sqrt(5))/2 * (10 ** (digits_requested - 1)))/ 10 ** (digits_requested - 1)
      if (digits_requested > 0 && digits_requested <= 16){
        console.log(`The first ${digits_requested} digits of the golden ratio are: ${golden_ratio_digits}`);
      }
      rl.close();
    });
  }
});
