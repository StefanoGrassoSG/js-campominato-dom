////////////////////////////////////////////////
        //GRID CREATION 
///////////////////////////////////////////////
const startButton = document.getElementById('start')
const container = document.querySelector('.container-game')

startButton.addEventListener('click', function(){
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
            console.log(this.innerHTML);
        })
    }
}

//////////////////////////////////////
        //GAME CREATION 
///////////////////////////////////////

const bombArray = [];

randomNumber(1, 16);









//FUNCTIONS

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }