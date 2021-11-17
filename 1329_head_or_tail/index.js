var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let x = 1;

let mary = 0;
let john = 0;

while (true) {
  if (lines[x - 1] === '0') {
    break;
  }

  lines[x].split(' ').forEach(element => {
    if (element === '0') {
      mary++;
    } else if (element === '1') {
      john++;
    }

  })
  console.log("Mary won " + mary + " times and John won " + john + " times");

  mary = 0;
  john = 0;
  x = x + 2;
}