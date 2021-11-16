var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

lines = lines[0].split(' ')

const p1 = lines[0]
const c1 = lines[1]

const p2 = lines[2]
const c2 = lines[3]

const result1 = p1 * c1;
const result2 = p2 * c2;

if (result1 === result2) return console.log('0')
if (result1 > result2) return console.log('-1')
if (result1 < result2) return console.log('1')