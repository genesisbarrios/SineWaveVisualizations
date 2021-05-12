//variables
var speed = 50;

function setSpeed(newSpeed){
    noLoop();
    speed = 100 - newSpeed;
    speed = Math.ceil(speed / 10) * 10
    console.log(speed);
    redraw();
    loop();
}

var waves = 10;

function setWaves(newWaves){

    noLoop();
        waves = newWaves / 2;
        waves = Math.ceil(waves / 10) * 10;
        console.log(waves);
        redraw();
    loop()
}

var shape = 10;

function setShape(newShape){
    noLoop();

    setTimeout(function(){
        shape = 100 - newShape;
        shape = Math.ceil(shape / 10) * 10;
        console.log(shape);
        redraw();
    }, 2000);
loop()
    
}
//p5.js setup and draw
function setup() {
    createCanvas( 400, 400, WEBGL);
    angleMode(DEGREES);
}

function draw() {
    background(35);

    rotateX(60)

    noFill()
    stroke(255)

    for(var i=0; i<waves; i++){
        
        var r = map(sin(frameCount / 2), -1, 1, 100, 200)
        var g = map(i, 0, 50, 100, 200)
        var b = map(cos(frameCount), -1, 1, 200, 100)
        
        stroke(r, g, b);
        
        console.log('speed: ' + speed)
        rotate(frameCount / speed);//multiples of ten
        
        beginShape();
        for(var j = 0; j<360; j+=shape){//multiples of ten
            var rad = i * 3;
            var x = rad * cos(j);
            var y = rad * sin(j);
            var z = sin(frameCount * 2 + i * 10) * 50
            
            vertex(x, y, z);
        }
        endShape(CLOSE);
    }
}
