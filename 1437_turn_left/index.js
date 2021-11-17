var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let x = 1;
let index = 0;

function getDirection() {
  if (index % 4 === 0) return "N";
  else if (index % 4 === 3 || index % 4 === -1) return "O";
  else if (index % 4 === 1 || index % 4 === -3) return "L";
  else return "S";
}

while (true) {
  if (lines[x - 1] === '0') {
    break;
  }

  lines[x].split('').forEach(element => {
    switch (element) {
      case 'D':
        index++;
        break;
      case 'E':
        index--;
        break;
      default:
        break;
    }
  })

  console.log(getDirection());

  x = x + 2;
  index = 0;
}