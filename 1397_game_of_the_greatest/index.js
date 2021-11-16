var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let scores = [];
let player1 = 0;
let player2 = 0;

lines.forEach((element, index) => {
    if (element.split(' ').length === 1) {
        if (index !== 0) {
            scores.push([player1, player2])
        }

        player1 = 0;
        player2 = 0;

    } else {
        if (+element.split(' ')[0] > +element.split(' ')[1]) {
            player1++;
        } else if (+element.split(' ')[0] < +element.split(' ')[1]) {
            player2++;
        }
    }
})

scores.forEach(score => {
    console.log(score[0], score[1])
})