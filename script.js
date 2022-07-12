'use strict';

//document.querySelector('.number').textContent;
/*document.querySelector('.message').textContent = 'Numero correto';

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 15;*/

//document.querySelector('.guess').value = 8;
let score = 20;
document.querySelector('.score').textContent = score;
let highscore = 0;
let thisNumber = Math.trunc(Math.random() * 20) + 1;
console.log(thisNumber);
document.querySelector('.check').addEventListener('click', 
() => {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (guess <= 20 && guess >= 0) {
        if(!guess || guess.toString){
            document.querySelector('.message').textContent = 'Não é um numero';
        }
        if (guess) {
            if (guess === thisNumber) {
                document.querySelector('.message').textContent = 'Você acertou';
                document.querySelector('.number').textContent = thisNumber;
                document.body.style.backgroundColor = '#60b347'  ;

                if (score > highscore) {
                    document.querySelector('.highscore').textContent = score;
                    highscore = score;
                };
            }
            else {
                if(score > 1) {
                    if(thisNumber > guess) {
                        document.querySelector('.message').textContent = 'Numero baixo';
                        score--;
                        document.querySelector('.score').textContent = score;
                    } else {
                        document.querySelector('.message').textContent = 'Numero alto';
                        score--;
                        document.querySelector('.score').textContent = score;
                    };
                    document.querySelector('.number').textContent = guess;
                } else {
                    document.querySelector('.message').textContent = 'Você Perdeu!';
                    document.querySelector('.score').textContent = 0;
                    document.body.style.backgroundColor = '#ff2e2e';
                };
            };
        };
    } else {
        if (guess < 0) {
            document.querySelector('.message').textContent = 'Numero menor que 0'
        } else {
            document.querySelector('.message').textContent = 'Numero maior que 20'
        };
    };
});



document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    thisNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.body.style.backgroundColor = '#222';
    console.log(thisNumber);
});