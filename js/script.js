////////////////////////////////////////////////
        //GRID CREATION 
///////////////////////////////////////////////
const startButton = document.getElementById('start')
const container = document.querySelector('.container-game')

const bombArray = [];

startButton.addEventListener('click', function(){

    addNumbers(16);

    container.innerHTML = '';
    if(document.getElementById('diff').value == 'easy') {
        createMyElement(49, 'square-7');
        }
    
    
    else if (document.getElementById('diff').value == 'normal') {
        createMyElement(81, 'square-9');
    }
   
    else if (document.getElementById('diff').value == 'hard') {
        createMyElement(100, 'square-10');
    }
    
    if (bombArray.includes()) {
        document.querySelector('h1').innerHTML = 'HAI PERSOOOOO';
    }
    console.log(bombArray)
    
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
            if (bombArray.includes(clickedNumber)) {
                newDiv.classList.add('red');
                newDiv.classList.remove('square:hover')

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