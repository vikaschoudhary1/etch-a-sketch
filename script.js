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
    } else if(userAnswer <= 100){
        removeGrid();
        createGrid(userAnswer);
    }
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
            box.style.background = `rgb(${redValue},${greenValue},${blueValue})`;

            let divBrightness = window.getComputedStyle(box).getPropertyValue('filter');
            let divBrightnessValue = +divBrightness.slice(11,14);

            if (divBrightness==='none'){
                box.style.filter = `brightness(1)`;
            }else if(divBrightness === 'brightness(1)'){        // decimal shifts the number so separate case for 1
                box.style.filter = `brightness(0.9)`;       
            } else if ((0 < divBrightnessValue*10 <= 9) ){
                let decrementBrightness = divBrightnessValue * 10 ;
                decrementBrightness--;
                box.style.filter = `brightness(${decrementBrightness/10})`;
            }
            // box.classList.add('.hover');
            // setTimeout(() => {box.style.background = null}, 500);
        })
    })
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    document.querySelectorAll('.box').forEach((box) => {
        box.style.background = null;
        box.style.filter = 'brightness(1)'
    });
})

function randomColorValue() {
    return Math.floor(Math.random() * 255 + 1);
}

function removeGrid() {
    const rows = document.querySelectorAll('.row').forEach((item) => item.remove());
}

document.querySelector('#trail').addEventListener('click', () => alert('Button out of service'));

document.querySelector('#select10').addEventListener('click', () => { removeGrid();
    createGrid(10);
});

})


