let nn = new NeuralNetwork(2, 3, 1, 0.1);

let inputs = [  [0, 0], [0, 1], [1, 0], [1, 1] ];
let results = [ [0], [1], [1], [0] ];

let canvas = document.getElementById("testCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let active = false;
function visualTest() {
    for (let i = 0; i < 100; i++) {
        let index = Math.floor(Math.random() * 4);
        nn.bp(inputs[index], results[index]);
        let a = Math.floor(Math.random()*50)/50;
        let b = Math.floor(Math.random()*50)/50;
        let c = nn.ff([a,b]);
        ctx.fillStyle = `rgb(${c[0]*255}, ${c[0]*255}, ${c[0]*255})`;
        ctx.fillRect(a*canvas.width, b*canvas.height, canvas.width/50, canvas.height/50);
    }
    if(active) window.requestAnimationFrame(visualTest);
}

function reset(){
    active = false;
    nn = new NeuralNetwork(2, 3, 1, 0.1);
    setTimeout(function(){
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        }, 100);
}