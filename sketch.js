var bg,bgImg;
var mouse,mouseImg1,mouseImg2,mouseImg3,cat,catImg1,catImg2,catImg3;
function preload() {

    bgImg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png");
    mouseImg1 = loadAnimation("mouse1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadAnimation("mouse4.png");
    catImg3 = loadAnimation("cat4.png");
}

function setup(){
    createCanvas(800,800);

    bg = createSprite(300,300);
    bg.addImage(bgImg);
    mouse = createSprite(50,540);
    mouse.addAnimation("normal",mouseImg3);
    mouse.addAnimation("teasing",mouseImg2);
    mouse.addAnimation("happy",mouseImg1);
    mouse.scale = 0.1;
    //mouse.debug = true;
    mouse.setCollider("circle", 0,0,500);

    cat = createSprite(695,500);
    cat.addAnimation("normal",catImg3);
    cat.addAnimation("chasing",catImg2);
    cat.addAnimation("happy",catImg1);
    cat.scale = 0.25; 
    //cat.debug = true;
    cat.setCollider("circle",0,0,500);

}

function draw() {
    background("bgImg");

    keyPressed();
    mouse.width = 88;
    cat.width = 250;
    if(cat.x - mouse.x < (cat.width + mouse.width)/2){
        cat.velocityX = 0;
        cat.changeAnimation("happy");
        cat.scale = 0.2;
        mouse.changeAnimation("happy");
    }

    drawSprites();
}


function keyPressed(){


    if(keyDown("LEFT_ARROW") || keyDown("space")){
        mouse.changeAnimation("teasing");
        cat.changeAnimation("chasing");
        cat.velocityX = -2;
    }

}