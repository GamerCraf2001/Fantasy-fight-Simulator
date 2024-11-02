const unitSprite1 = document.getElementById('unitSprite1');
let frame = 0;
const totalFrames = 5;
let intervalId;

unitSprite1.style.backgroundImage = `url('./assets/unit/00.png')`;
unitSprite1.style.backgroundColor = 'transparent';
unitSprite1.style.border = 'none';

const SE = document.createElement('audio');
SE.id = 'se';
SE.src = './assets/soundEffect/SE.wav';
SE.loop = false;

const moveDistance = document.getElementById('mainArea').offsetWidth / 4;
const unitSprite1Height = unitSprite1.offsetHeight;
const unitSprite1Width = unitSprite1.offsetWidth;
const unitSprite1Left = unitSprite1.offsetLeft;
const unitSprite1Top = unitSprite1.offsetTop;


function playAnimation() {
    unitSprite1.style.transform = `translateX(-${moveDistance}px)`;
    unitSprite1.style.height = `${unitSprite1Height}px`;
    unitSprite1.style.width = `${unitSprite1Width}px`;

    console.log('playAnimation');
    SE.play();
    clearInterval(intervalId);
    frame = 0;

    intervalId = setInterval(() => {
        if (frame < totalFrames) {
            unitSprite1.style.backgroundImage = `url('./assets/unit/0${frame}.png')`;
            frame++;
        } else {
            clearInterval(intervalId);
            unitSprite1.style.backgroundImage = `url('./assets/unit/00.png')`;
            unitSprite1.style.transform = `translateX(0px)`;
            unitSprite1.style.top = `${unitSprite1Top}px`;
            unitSprite1.style.left = `${unitSprite1Left}px`;
            unitSprite1.style.height = `${unitSprite1Height}px`;
            unitSprite1.style.width = `${unitSprite1Width}px`;
        }
    }, 100);
}

document.querySelector('.unit').addEventListener('click', playAnimation);
