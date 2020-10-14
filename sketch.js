var wall1, wall2, wall3;
var dustbin,dustbinIMG;
var ground;
var ground2;
var ball, ballIMG ,ball2;

var play;
var end;
var gamestate;

play = 1;
end = 0;
gamestate = play;

function preload() {
  ballIMG = loadImage("paper.png");
  dustbinIMG = loadImage("dustbingreen.png");
}


function setup() {
  createCanvas(800, 200);

  ball = createSprite(150, 50, 20, 20);
  ball.shapeColor = "#ff00f1";

  ball.addImage(ballIMG);
  ball.scale = 0.2


  ground = createSprite(400, 180, 800, 10);
  ground.shapeColor = "#fffe00";


  ground2 = createSprite(400, 180, 800, 10);
  ground2.shapeColor = "#fffe00";

  dustbin = createSprite(600, 110, 800, 10);
  dustbin.addImage(dustbinIMG);
  dustbin.scale = 0.4
  
}

function draw() {
  background(220);

  if (gamestate === play) {
    ball.velocityY = 2;
    if (ball.isTouching(ground)) {
      gamestate = end;

    }
  } else if (gamestate === end) {


    if (ball.isTouching(ground) && ball.y >= 129) {
      ball.velocityX = 16;
      ball.velocityY = -16;
    }

    if (ball.isTouching(dustbin)) {
      ball.velocityX = 0;
      ball.velocityY = 0;
      ball.visible = false;
      
      ball2 = createSprite(610, 150, 20, 20);
      ball2.shapeColor = "#ff00f1";
      ball2.addImage(ballIMG);
      ball2.scale = 0.2 ;
    }

    ball.velocityY = ball.velocityY + 2;
  }

  drawSprites();

}