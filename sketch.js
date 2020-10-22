const myEngine = Matter.Engine;
const myWorld = Matter.World;
const myBodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400, 400);

  engine = myEngine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  ground = myBodies.rectangle(200, 390, 400, 20, ground_options);
  myWorld.add(world, ground);

  var ball_options = {
    restitution: 1.0
  }

  ball = myBodies.circle(200, 100, 20, ball_options);
  myWorld.add(world, ball);
}

function draw() {
  background(0);
  myEngine.update(engine);
  fill("blue");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}