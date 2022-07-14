var xadrez,faca,ovo;
var gordo,pao;
var score = 0;
var xadrezImg,facaImg,ovoImg,gordoImg,paoImg;
var base

function preload(){
  xadrezImg = loadImage("./assets/xadrez.png")
  facaImg = loadImage("./assets/faca.png")
  ovoImg = loadImage("./assets/ovo.png")
  gordoImg= loadImage("./assets/gordo.png")
  paoImg  = loadImage("./assets/pao.png")
}

function setup(){
  createCanvas(800,800)
  
  xadrez=createSprite(200,200);
  xadrez.addImage(xadrezImg);
  xadrez.velocityY = 4;

  pao = createSprite(200,100,50,40)
  pao.addImage(paoImg)
  pao.scale = 0.07

  base = createSprite(width,700,1800,1)

  imageMode(CENTER)
}

function draw(){
  background(20)
  //image(xadrezImg,width/2,height/2,800,800)


  drawSprites()

  if(xadrez.y < 0 ){
    xadrez.y = xadrez.width/2;
  }
}