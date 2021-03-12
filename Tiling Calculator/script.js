const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var tilingCost = 1;
var width = 1;
var height = 1;

rl.question('How much does the tiling cost per square foot: ', (answer) => {
  tilingCost = answer;
  rl.question('What is the width of the area you wish to tile: ', (answer) => {
    tilingWidth = answer;
    rl.question('What is the length of the area you wish to tile: ', (answer) => {
      tilingLength = answer;
      calculateCost();
    })
  })
})

function calculateCost(){
  console.log("To tile that area you must spend $" + tilingCost * tilingLength * tilingWidth)
}
