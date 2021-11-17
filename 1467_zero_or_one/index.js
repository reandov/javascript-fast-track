var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const options = ['A', 'B', 'C'];

lines.forEach(line => {
  const match = line.split(' ')

  const filter_zero = match.filter(element => element === '0').length;

  if (filter_zero === 3) {
    return console.log("*");
  } else if (filter_zero === 1) {
    return console.log(options[match.findIndex(element => element === '0')]);
  }

  const filter_one = match.filter(element => element === '1').length;

  if (filter_one === 3) {
    return console.log("*");
  } else if (filter_one === 1) {
    return console.log(options[match.findIndex(element => element === '1')]);
  }
})