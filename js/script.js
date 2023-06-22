////////////////////////////////////////////////
        //GRID CREATION 
///////////////////////////////////////////////
const startButton = document.getElementById('start')
const replayButton = document.getElementById('try')
const replayButtonWinner = document.getElementById('trywinner')
const container = document.querySelector('.container-game')
const lose = document.querySelector('.game-over');
const winner = document.querySelector('.win');

let score = 0;

const bombArray = [];
replayButton.addEventListener('click', function(){
    location.reload();
})

replayButtonWinner.addEventListener('click', function(){
    location.reload();
})


startButton.addEventListener('click', function(){
    score = 0;
    addNumbers(16);
    container.innerHTML = '';
    console.log(bombArray)
    lose.classList.remove('visible');
    if(document.getElementById('diff').value == 'easy') {
        createMyElement(49, 'square-7');
        }
    
    
    else if (document.getElementById('diff').value == 'normal') {
        createMyElement(81, 'square-9');
    }
   
    else if (document.getElementById('diff').value == 'hard') {
        createMyElement(100, 'square-10');
    }
    
})


//FUNCTIONS

function createMyElement(cellNumber, classes) {
    for(i = 1; i <= cellNumber; i++) {
        const newDiv = document.createElement('div');
        container.append(newDiv);
        newDiv.append(i)
        newDiv.classList.add('square', classes)
        newDiv.addEventListener('click', function(){
            this.classList.toggle('active');
            let clickedNumber = parseInt(this.innerHTML);
            console.log(clickedNumber, typeof clickedNumber);

            if (!bombArray.includes(clickedNumber)) {
                score++;
            }

            if (score == 1) {
                winner.classList.add('visible');
                document.getElementById('victory-points').innerHTML = score;
            } 

            if (bombArray.includes(clickedNumber)) {
                newDiv.classList.add('red');
                document.getElementById('points').innerHTML = score;
                lose.classList.add('visible');
                container.innerH
            }

            
            
        })
    }
    
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function addNumbers(cycleNumber) {
    let count = 0;
    while (bombArray.length < cycleNumber) {
        const oneNumber = randomNumber(1, 49);

        if(!bombArray.includes(oneNumber)) {
            bombArray.push(oneNumber)
        }

        count++;
    }
} 