/* 
1) how much do I need to retire?  How much do I need to save every year at a fixed rate for a determined amount of years to reach this?
// 
*/

function calculation(savings, rate, years, annRaise) {
  // let val = deposit * Math.pow(((1 + annualGrowth)), years);
  // let rounded = Math.round(val * 100) / 100;
  // console.log(rounded);
  let n = 1;
  let total = savings;
  while (n < years) {
    savings += savings * annRaise;
    total = savings + total * (1 + rate);
    n++;
  }
  console.log(total);
}

calculation(10000, 0.07, 30, 0.0);

// console.log(Math.round(Math.pow(1.1, 30) * 100) / 100)
// console.log(Math.pow(1.1, 20))
