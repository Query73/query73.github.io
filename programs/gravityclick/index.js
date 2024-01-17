let planet, orbiter, button;

var isPressed = false;

var score = 0;

var startflag = false;

var timer = 0;

var endscore;

var smod;



function setup() {

new Canvas();

frameRate(60);

background('black');

endscore = new Sprite();

endscore.color = 'black';

smod = canvas.h / 501;

makebutton('START');

}



function makebutton(text){

button = new Sprite(canvas.w / 2, canvas.h / 2, 200 * smod, 100 * smod);

button.text = text;

button.textSize = 50 * smod;

}



function draw() {

clear();
background('black');

if (button.mouse.pressing()){

button.remove();

endscore.remove();

startfunc();

}

if (startflag){

textSize(100 * smod);

fill('white');

text(score.toString(), windowWidth / 10, windowHeight / 5);

orbiter.attractTo(planet, 100 * smod);

if (orbiter.mouse.pressing() && !isPressed){

score++;

//console.log(score);

isPressed = true;

}

if (!orbiter.mouse.hovering()){

isPressed = false;

}

timer++;

if (timer == 3600) {

//console.log(timer);

gameover();

}

text((60 - floor(timer / 60)), (canvas.w / 10) * 8, (canvas.h / 5));

}

}



function startfunc(){

var ww = windowWidth;

var wh = windowHeight;

planet = new Sprite(ww / 2, wh / 2, 250 * smod);

orbiter = new Sprite(ww / 4, wh / 4, 50 * smod);

orbiter.vel.y = 10;

planet.collider = 'static';

timer = 0;

score = 0;

startflag = true;

}

function gameover(){

planet.remove();

orbiter.remove();

startflag = 0;

endscore = new Sprite(canvas.w / 2, canvas.h / 5);

endscore.text = score;

endscore.textColor = 'white';

endscore.color = 'black';

makebutton('RETRY');

}
