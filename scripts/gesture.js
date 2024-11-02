window.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, { passive: false });

let currentUnit = null;

let startX = 0;
let startY = 0;


function setUnitColor(direction) {
    if (currentUnit) {
        const unitMove = currentUnit.querySelector('.unitMove');
        switch (direction) {
            case 'up':
                unitMove.style.backgroundImage = `url(./assets/img/attack.png)`;
                break;
            case 'down':
                unitMove.style.backgroundImage = `url(./assets/img/defense.png)`;
                break;
            case 'left':
                unitMove.style.backgroundImage = `url(./assets/img/item.png)`;
                break;
            case 'right':
                let dice_num = Math.floor(Math.random() * 6);
                if (dice_num === 5) {
                    unitMove.style.backgroundImage = `url(./assets/img/limit.png)`;
                } else if (dice_num >= 3) {
                    unitMove.style.backgroundImage = `url(./assets/img/skill.png)`;
                } else if (dice_num >= 1) {
                    unitMove.style.backgroundImage = `url(./assets/img/magic.png)`;
                } else {
                    unitMove.style.backgroundImage = `url(./assets/img/summon.png)`;
                }
                break;
        }
    }
}

let touchGuideTimer;


function handleGestureStart(event) {
    const touch = event.touches ? event.touches[0] : event;
    startX = touch.clientX;
    startY = touch.clientY;

    if (event.target.closest('.unit')) {
        currentUnit = event.target.closest('.unit');
    }
}

const threshold = 20;

function handleGestureEnd(event) {
    if (currentUnit) {
        const touch = event.changedTouches ? event.changedTouches[0] : event;
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;

        if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                    setUnitColor('right');
                } else {
                    setUnitColor('left');
                }
            } else {
                if (deltaY > 0) {
                    setUnitColor('down');
                } else {
                    setUnitColor('up');
                }
            }
        }
    }
    touchGuide.style.display = 'none';

    currentUnit = null;
}


const units = document.querySelectorAll('.unit');
units.forEach(unit => {
    unit.addEventListener('touchstart', handleGestureStart);
    unit.addEventListener('mousedown', handleGestureStart);
});

document.body.addEventListener('touchend', handleGestureEnd);
document.body.addEventListener('mouseup', handleGestureEnd);
