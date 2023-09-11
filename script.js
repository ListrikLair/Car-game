// model
let app = document.getElementById('app');
let carPng = '<img src="./img/car.png" alt="" />';
let carPos = ['', 'active', '']

// view
updateView();
setPosition();
function updateView() {
    app.innerHTML = /*HTML*/`
    <div id="game">
        <div id="header">
        </div>
        <div id="playArea">
        <div id="carPositions">
                <div id="pos1"></div>
                <div id="pos2"></div>
                <div id="pos3"></div>
            </div>
        </div>
    </div>
`;
}

function setPosition() {
    if (carPos[0] == 'active') {
        document.getElementById('carPositions').innerHTML = /*HTML*/`
        <div id="pos1">${carPng}</div>
        <div id="pos2"></div>
        <div id="pos3"></div>
 `;
    } else if (carPos[1] == 'active') {
        document.getElementById('carPositions').innerHTML = /*HTML*/`
        <div id="pos1"></div>
        <div id="pos2">${carPng}</div>
        <div id="pos3"></div>
 `;
    } else if (carPos[2] == 'active') {
        document.getElementById('carPositions').innerHTML = /*HTML*/`
        <div id="pos1"></div>
        <div id="pos2"></div>
        <div id="pos3">${carPng}</div>
 `;
    }
}

// controller
function moveCar(direction) {
    let position1 = document.getElementById('pos1');
    let position2 = document.getElementById('pos2');
    let position3 = document.getElementById('pos3');
    if (carPos[0] == 'active') {
        position1.innerHTML = '';
        if (direction == 'left') {
            carPos.splice(0, 3, '', '', 'active');
            position3.innerHTML = carPng;
        } else if (direction == 'right') {
            carPos.splice(0, 3, '', 'active', '');
            position2.innerHTML = carPng;
        }
    } else if (carPos[1] == 'active') {
        position2.innerHTML = '';
        if (direction == 'left') {
            carPos.splice(0, 3, 'active', '', '');
            position1.innerHTML = carPng;
        } else if (direction == 'right') {
            carPos.splice(0, 3, '', '', 'active');
            position3.innerHTML = carPng;
        }
    } else if (carPos[2] == 'active') {
        position3.innerHTML = '';
        if (direction == 'left') {
            carPos.splice(0, 3, '', 'active', '');
            position2.innerHTML = carPng;
        } else if (direction == 'right') {
            carPos.splice(0, 3, 'active', '', '');
            position1.innerHTML = carPng;
        }
    }
}

document.addEventListener('keydown', function(event){
    if (event.key == 'ArrowLeft'){
        moveCar('left');
    } else if (event.code == 'ArrowRight'){
        moveCar('right');
    } else{return;}
});