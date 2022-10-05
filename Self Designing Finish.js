var score = 0; 

var sea = createSprite(200,200);
sea.setAnimation("sea.jpg");

var fish = createSprite(100,150);
fish.setAnimation("fish.png");
fish.scale = 0.3; 

var coin = createSprite(randomNumber(0,400),randomNumber(0,400));
coin.setAnimation("coin.png");
coin.scale = 0.5;


function preload(){
    sea = loadImage("sea.jpg");
    fish = loadImage("fish.png");
    coin = loadImage("coin.png");
}


createEdgeSprites();


function draw()
{
    createCanvas(400,400);
    background("white");
    drawSprites();

    if (keyDown("up"))
    {
        fish.y = fish.y-5;
    }

    else if (keyDown("down"))
    {
        fish.y = fish.y+5;
    }

    else if (keyDown("right"))
    {
        fish.x = fish.x+5;
    }

    else if (keyDown("left"))
        fish.x = fish.x-5;
    
    if(fish.isTouching(coin));
    {
       score = score +1;
       coin.x = randomNumber(0,400);
       coin.y = randomNumber(0,400);
    }

    drawSprites();
    fill("black");
    textSize(20);
    text(" Score " + score,30,40);


}














 


















































































