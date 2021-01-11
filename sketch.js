var canvas,backGround;
var together;
var tom, tomImage1,tomImage2;
var jerry, jerryImage1,jerryImage2;

function preload() {
    backGround = loadImage("images/garden.png");
    tomImage1= loadAnimation("images/tomOne.png");
    tomImage2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImage3= loadAnimation("images/tomFour.png");
    jerryImage1=loadAnimation("images/jerryOne.png");
    jerryImage2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImage3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImage1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImage1);
    jerry.scale = 0.15;

}

function draw() {

    background(backGround);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImage3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImage3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImage2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImage2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}