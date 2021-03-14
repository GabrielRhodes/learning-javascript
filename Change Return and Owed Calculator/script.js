const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var hundredDollar = 100;
var fiftyDollar = 50;
var twentyDollar = 20;
var tenDollar = 10;
var fiveDollar = 5;
var dollar = 1;
var quarter = .25;
var dime = .1;
var nickel = .05;
var penny = .01;
var cost = 0;
var payment = 0;
var hundredDollarsUsed = 0;
var fiftyDollarsUsed = 0;
var twentyDollarsUsed = 0;
var tenDollarsUsed = 0;
var fiveDollarsUsed = 0;
var dollarsUsed = 0;
var quartersUsed = 0;
var dimesUsed = 0;
var nickelsUsed = 0;
var penniesUsed = 0;
var isOwedOrChange;

rl.question("What is the cost of your purchase in USD: " , (answer) => {
  cost = answer;
  rl.question("\nHow much will you pay for this product with in USD: " , (answer) => {
    payment = answer;
    console.log(oweOrChange() + getChange());
  })
})

function oweOrChange(){
  difference = Math.round((payment - cost) * 100)/100;
  if (difference < 0){
    difference = difference * (-1);
    isOwedOrChange = "amount still owed";
    return "\nSorry, looks like you need to use another: ";
  } else {
    isOwedOrChange = "change";
    return "\nYour change should be: ";
  }
}

function getChange(){
  while (difference >= hundredDollar){
    difference -= hundredDollar;
    hundredDollarsUsed++;
  }
  while (difference >= fiftyDollar){
    difference -= fiftyDollar;
    fiftyDollarsUsed++
  }
  while (difference >= twentyDollar){
    difference -= twentyDollar;
    twentyDollarsUsed++
  }
  while (difference >= tenDollar){
    difference -= tenDollar;
    tenDollarsUsed++
  }
  while (difference >= fiveDollar){
    difference -= fiveDollar;
    fiveDollarsUsed++
  }
  while (difference >= dollar){
    difference -= dollar;
    dollarsUsed++
  }
  while (difference >= quarter){
    difference -= quarter;
    quartersUsed++
  }
  while (difference >= dime){
    difference -= dime;
    dimesUsed++
  }
  while (difference >= nickel){
    difference -= nickel;
    nickelsUsed++
  }
  while (difference >= penny){
    difference -= penny;
    penniesUsed++
  }
  
  var hundredScript = `${hundredDollarsUsed} $100 bills, `;
  var fiftyScript = `${fiftyDollarsUsed} $50 bills, `;
  var twentyScript = `${twentyDollarsUsed} $20 bills, `;
  var tenScript = `${tenDollarsUsed} $10 bills, `;
  var fiveScript = `${fiveDollarsUsed} $5 bills, `;
  var oneScript = `${dollarsUsed} $1 bills, `;
  var quarterScript = `${quartersUsed} quarters, `;
  var dimeScript = `${dimesUsed} dimes, `;
  var nickelScript = `${nickelsUsed} nickels, `;
  var pennyScript = `and ${penniesUsed} pennies, `
  var endScript = `and the total ${isOwedOrChange} is $` + Math.abs(Math.round((payment - cost) * 100)/100);

  if (hundredDollarsUsed < 1){
    hundredScript = "";
  }
  if (fiftyDollarsUsed < 1){
    fiftyScript = "";
  }
  if (twentyDollarsUsed < 1){
    twentyScript = "";
  }
  if (tenDollarsUsed < 1){
    tenScript = "";
  }
  if (fiveDollarsUsed < 1){
    fiveScript = "";
  }
  if (dollarsUsed < 1){
    oneScript = "";
  }
  if (quartersUsed < 1){
    quarterScript = "";
  }
  if (dimesUsed < 1){
    dimeScript = "";
  }
  if (nickelsUsed < 1){
    nickelScript = "";
  }
  if (penniesUsed < 1){
    pennyScript = "";
  }
  
  return hundredScript + fiftyScript + twentyScript + tenScript + fiveScript + oneScript + quarterScript + dimeScript + nickelScript + pennyScript + endScript;
}
