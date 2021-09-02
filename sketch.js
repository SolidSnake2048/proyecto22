var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var fairy,fairyImg,fairyVoice;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairyVoice=loadSound("sound/JoyMusic.mp3");
	//carga aquí la animación del hada
}

function setup() {
	createCanvas(800, 750);
	//fairy.addSound("fairyTalk",fairyVoice);
	//escribe el código para reproducir el sonido fairyVoice
	fairy=createSprite(400,370,50,50);
	fairy.scale=0.3;
	fairy.addAnimation("fairyMoves",fairyImg);
	//crea el sprite del hada, y agrega la animación para el hada


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y>470 && starBody.position.y>470){
	  Matter.Body.setStatic(starBody,true);
  }
  //escribe aquí el código para detener la estrella en la mano del hada

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if(keyCode===RIGHT_ARROW){
		fairy.velocityX=2;
	}
	if(keyCode===LEFT_ARROW){
		fairy.velocityX=-2;
	}
	if(keyCode===UP_ARROW){
		fairy.velocityX=0;
	}
	//escribe el código para mover al hada a la izquierda y derecha
	
}
