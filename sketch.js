//variables
var speed = 50;

function setSpeed(newSpeed){
    speed = 100 - newSpeed;
    console.log(newSpeed);
}

var waves = 10;

function setWaves(newWaves){
    waves = newWaves;
    console.log(waves);
}

var shape = 10;

function setShape(newShape){
    noLoop();

    setTimeout(function(){
        shape = newShape;
        console.log(newShape);
        loop();
    }, 2000);

    
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
        
        rotate(frameCount / speed);//speed input not working?
        
        beginShape();
        for(var j = 0; j<360; j+=10){//get shape to work
            var rad = i * 3;
            var x = rad * cos(j);
            var y = rad * sin(j);
            var z = sin(frameCount * 2 + i * 10) * 50
            
            vertex(x, y, z);
        }
        endShape(CLOSE);
    }
}
