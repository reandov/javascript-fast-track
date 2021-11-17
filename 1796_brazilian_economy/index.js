var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let ok = 0;
let nok = 0;

lines[1].split(' ').forEach(element => {
  if (element === '1') {
    nok++;
  } else if (element === '0') {
    ok++;
  }
})

console.log(ok > nok ? 'Y' : 'N');