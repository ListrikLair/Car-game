// model
let app = document.getElementById('app');
let carPng = '<img src="./img/car.png" alt="" />';
let carPos = ['', 'active', '']
let points = 0;
let speed = 60;
let secTimer = 0;
let minTimer = 0;

// view
updateView();
timers();
function updateView() {
    app.innerHTML = /*HTML*/`
    <div id="game">
        <div id="header">
            <div id="points">${points.toString().padStart(4, 0)}</div>
            <div id="pointsText">Points:</div>
            <div id="speed">${speed}km/h</div>
            <div id="timer">${minTimer.toString().padStart(2, 0)}:${secTimer.toString().padStart(2, 0)}</div>
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
    setPosition();
}

function setPosition() {
    position = document.getElementById('carPositions');
    if (carPos[0] == 'active') {
        position.innerHTML = /*HTML*/`
        <div id="pos1">${carPng}</div>
        <div id="pos2"></div>
        <div id="pos3"></div>
 `;
    } else if (carPos[1] == 'active') {
        position.innerHTML = /*HTML*/`
        <div id="pos1"></div>
        <div id="pos2">${carPng}</div>
        <div id="pos3"></div>
 `;
    } else if (carPos[2] == 'active') {
        position.innerHTML = /*HTML*/`
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
        if (direction == 'left') { return;
        } else if (direction == 'right') {
            position1.innerHTML = '';
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
        if (direction == 'left') {
            position3.innerHTML = '';
            carPos.splice(0, 3, '', 'active', '');
            position2.innerHTML = carPng;
        } else if (direction == 'right') {return;}
    }
}

function timers() {
    setInterval(pointIncrease, 50)
    setInterval(timerIncreaseSecond, 1000)
}

function pointIncrease() {
    points++;
    updateView();
}

function timerIncreaseSecond() {
    secTimer++;
    if (secTimer > 59) {
        secTimer = 0;
        timerIncreaseMinute();
    }
    updateView();
}

function timerIncreaseMinute() {
    minTimer++;
    updateView();
}

document.addEventListener('keydown', function (event) {
    if (event.key == 'ArrowLeft') {
        moveCar('left');
    } else if (event.code == 'ArrowRight') {
        moveCar('right');
    } else { return; }
});