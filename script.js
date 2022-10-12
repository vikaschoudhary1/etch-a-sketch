document.addEventListener('DOMContentLoaded', () => { 

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let userAnswer = prompt('What sized gird would you like? Type a number.');
    userAnswer = Number(userAnswer);
    if (typeof(userAnswer) !== 'number'){
        alert('Please type a valid number')
        return;
    } else if (userAnswer > 100){
        alert('Number too large, please enter a smaller number')
    }
    removeGrid();
    createGrid(userAnswer);
})


function createGrid(numberOfDiv) {

    for (let i = 0; i < numberOfDiv; i++){
    const newRow = document.createElement(`div`);
    newRow.className = "row";
    document.querySelector('#container').appendChild(newRow);
    }
    
    const DivList = document.querySelectorAll('.row')
    DivList.forEach((div) => {
        for (let i=0; i < numberOfDiv; i++){
        const newDiv = document.createElement('div');
        newDiv.className = 'box';
        div.appendChild(newDiv);
        }
    }) 

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            const redValue = +randomColorValue();
            const greenValue = +randomColorValue();
            const blueValue = +randomColorValue();
            box.style.background = `#${redValue}${greenValue}${blueValue}`;
            // box.classList.add('.hover');
            // setTimeout(() => {box.classList.remove('hover')}, 500);
        })
    })
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    document.querySelectorAll('.box').forEach((box) => {
        box.classList.remove('hover');
    });
})

function randomColorValue() {
    return Math.floor(Math.random() * 255 + 1);
}

function removeGrid() {
    const rows = document.querySelectorAll('.row').forEach((item) => item.remove());
}

})


