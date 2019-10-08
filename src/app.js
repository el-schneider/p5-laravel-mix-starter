import p5 from 'p5';
import drawEllipse from './modules/drawEllipse.js';

window.preload = () => {

}

window.setup = function () {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

window.draw = function () {
    drawEllipse();
}

window.windowResized = function () {
    resizeCanvas(window.innerWidth, window.innerHeight);
}