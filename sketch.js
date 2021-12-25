var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall9;
var wall10;
var wall11;
var wall12;
var wall13;
var wall14;
var wall15;
var wall16;
var wall17;
var wall18;
var wall19;
var wall20;
var wall21;
var wall22;
var wall23;
var pacman, player;
var redGhost, redPlayer;
var blueGhost, bluePlayer;
var orangeGhost, orangePlayer;
var pinkGhost, pinkPlayer;

function preload(){
pacman = loadImage("pacman-removebg-preview.png");
redGhost = loadImage("pacman_red_ghost-removebg-preview.png");
blueGhost = loadImage("pacman_blue_ghost-removebg-preview.png");
orangeGhost = loadImage("pacman_orange_ghost-removebg-preview.png");
pinkGhost = loadImage("pacman_pink_ghost-removebg-preview.png");
}

function setup(){
createCanvas(1315,1000);

//create pacman
player = createSprite(650,400);
player.addImage(pacman);
player.scale = 0.3;
player.debug = false;

//create red
redPlayer = createSprite(850,240);
redPlayer.addImage(redGhost);
redPlayer.scale = 0.35;
redPlayer.velocityX = 4;
redPlayer.debug = false;

//create blueGhost
bluePlayer = createSprite(1000,560);
bluePlayer.addImage(blueGhost);
bluePlayer.scale = 0.35;
bluePlayer.velocityY = -4;
bluePlayer.debug = false;

//create orangeGhost
orangePlayer = createSprite(285,380);
orangePlayer.addImage(orangeGhost);
orangePlayer.scale = 0.4;
orangePlayer.velocityY = 4;
orangePlayer.debug = false;

//create pinkGhost
pinkPlayer = createSprite(730,730);
pinkPlayer.addImage(pinkGhost);
pinkPlayer.scale = 0.5;
pinkPlayer.velocityX = 4;
pinkPlayer.debug = false;

//create walls
wall1 = createSprite(12,440,25,810);
wall2 = createSprite(30,10,2550,50);
wall3 = createSprite(110,820,2550,50);
wall4 = createSprite(1300,400,30,800);
wall5 = createSprite(640,100,65,150);
wall6 = createSprite(640,590,60,150);
wall7 = createSprite(160,150,130,60);
wall8 = createSprite(450,150,170,60);
wall9 = createSprite(890,150,170,60);
wall10 = createSprite(1140,150,130,60);
wall11 = createSprite(160,320,130,60);
wall12 = createSprite(470,320,250,60);
wall13 = createSprite(860,320,250,60);
wall14 = createSprite(1145,320,130,60);
wall15 = createSprite(650,490,270,60);
wall16 = createSprite(75,490,105,60);
wall17 = createSprite(1250,490,105,60);
wall18 = createSprite(210,420,30,170);
wall19 = createSprite(1095,420,30,170);
wall20 = createSprite(300,640,350,60);
wall21 = createSprite(1015,640,350,60);
wall22 = createSprite(370,530,30,170);
wall23 = createSprite(970,530,30,170);
}

function draw(){
background("black");
movements();
collides();
drawSprites();
}

// code to take the pacman back to it's initial position when it touches any one of the four ghosts
function isTouching(){
    
if (player.isTouching(redPlayer)){
    player.positionX = 650;
    player.positionY = 450;
}

if (player.isTouching(bluePlayer)){
   player.positionX = 650;
   player.positionY = 450;
}
if (player.isTouching(orangePlayer)){
    player.positionX = 650;
    player.positionY = 450;
}
if (player.isTouching(pinkPlayer)){
    player.positionX = 650;
    player.positionY = 450;
}
}

//code to move the pacman to the assigned direction when a certain key is pressed 
function movements(){
    if(keyWentDown("right"))
    {
        player.velocityX = 4
        player.velocityY = 0
    }
    
    if(keyWentDown("left"))
    {
        player.velocityX = -4
        player.velocityY = 0
    }
    if(keyWentDown("up"))
    {
        player.velocityX = 0
        player.velocityY = -4
    }
    if(keyWentDown("down"))
    {
        player.velocityX = 0
        player.velocityY = 4
    }
    if(keyWentDown("space"))
    {
        player.velocityX = 0
        player.velocityY = 0
    }
}

function collides(){

    // code to make the pacman collide with the walls
    player.collide(wall1)
    player.collide(wall2)
    player.collide(wall3)
    player.collide(wall4)
    player.collide(wall5)
    player.collide(wall6)
    player.collide(wall7)
    player.collide(wall8)
    player.collide(wall9)
    player.collide(wall10)
    player.collide(wall11)
    player.collide(wall12)
    player.collide(wall13)
    player.collide(wall14)
    player.collide(wall15)
    player.collide(wall16)
    player.collide(wall17)
    player.collide(wall18)
    player.collide(wall19)
    player.collide(wall20)
    player.collide(wall21)
    player.collide(wall22)
    player.collide(wall23)

    //code to make the redGhost bounceoff the walls
    redPlayer.bounceOff(wall1)
    redPlayer.bounceOff(wall2)
    redPlayer.bounceOff(wall3)
    redPlayer.bounceOff(wall4)
    redPlayer.bounceOff(wall5)
    redPlayer.bounceOff(wall6)
    redPlayer.bounceOff(wall7)
    redPlayer.bounceOff(wall8)
    redPlayer.bounceOff(wall9)
    redPlayer.bounceOff(wall10)
    redPlayer.bounceOff(wall11)
    redPlayer.bounceOff(wall12)
    redPlayer.bounceOff(wall13)
    redPlayer.bounceOff(wall14)
    redPlayer.bounceOff(wall15)
    redPlayer.bounceOff(wall16)
    redPlayer.bounceOff(wall17)
    redPlayer.bounceOff(wall18)
    redPlayer.bounceOff(wall19)
    redPlayer.bounceOff(wall20)
    redPlayer.bounceOff(wall21)
    redPlayer.bounceOff(wall22)
    redPlayer.bounceOff(wall23)

    //code to make the blueGhost bounceoff the walls
    bluePlayer.bounceOff(wall1)
    bluePlayer.bounceOff(wall2)
    bluePlayer.bounceOff(wall3)
    bluePlayer.bounceOff(wall4)
    bluePlayer.bounceOff(wall5)
    bluePlayer.bounceOff(wall6)
    bluePlayer.bounceOff(wall7)
    bluePlayer.bounceOff(wall8)
    bluePlayer.bounceOff(wall9)
    bluePlayer.bounceOff(wall10)
    bluePlayer.bounceOff(wall11)
    bluePlayer.bounceOff(wall12)
    bluePlayer.bounceOff(wall13)
    bluePlayer.bounceOff(wall14)
    bluePlayer.bounceOff(wall15)
    bluePlayer.bounceOff(wall16)
    bluePlayer.bounceOff(wall17)
    bluePlayer.bounceOff(wall18)
    bluePlayer.bounceOff(wall19)
    bluePlayer.bounceOff(wall20)
    bluePlayer.bounceOff(wall21)
    bluePlayer.bounceOff(wall22)
    bluePlayer.bounceOff(wall23)

    //code to make the orangeGhost bounceoff the walls
    orangePlayer.bounceOff(wall1)
    orangePlayer.bounceOff(wall2)
    orangePlayer.bounceOff(wall3)
    orangePlayer.bounceOff(wall4)
    orangePlayer.bounceOff(wall5)
    orangePlayer.bounceOff(wall6)
    orangePlayer.bounceOff(wall7)
    orangePlayer.bounceOff(wall8)
    orangePlayer.bounceOff(wall9)
    orangePlayer.bounceOff(wall10)
    orangePlayer.bounceOff(wall11)
    orangePlayer.bounceOff(wall12)
    orangePlayer.bounceOff(wall13)
    orangePlayer.bounceOff(wall14)
    orangePlayer.bounceOff(wall15)
    orangePlayer.bounceOff(wall16)
    orangePlayer.bounceOff(wall17)
    orangePlayer.bounceOff(wall18)
    orangePlayer.bounceOff(wall19)
    orangePlayer.bounceOff(wall20)
    orangePlayer.bounceOff(wall21)
    orangePlayer.bounceOff(wall22)
    orangePlayer.bounceOff(wall23)

    //code to make the pinkGhost bounceoff the walls
    pinkPlayer.bounceOff(wall1)
    pinkPlayer.bounceOff(wall2)
    pinkPlayer.bounceOff(wall3)
    pinkPlayer.bounceOff(wall4)
    pinkPlayer.bounceOff(wall5)
    pinkPlayer.bounceOff(wall6)
    pinkPlayer.bounceOff(wall7)
    pinkPlayer.bounceOff(wall8)
    pinkPlayer.bounceOff(wall9)
    pinkPlayer.bounceOff(wall10)
    pinkPlayer.bounceOff(wall11)
    pinkPlayer.bounceOff(wall12)
    pinkPlayer.bounceOff(wall13)
    pinkPlayer.bounceOff(wall14)
    pinkPlayer.bounceOff(wall15)
    pinkPlayer.bounceOff(wall16)
    pinkPlayer.bounceOff(wall17)
    pinkPlayer.bounceOff(wall18)
    pinkPlayer.bounceOff(wall19)
    pinkPlayer.bounceOff(wall20)
    pinkPlayer.bounceOff(wall21)
    pinkPlayer.bounceOff(wall22)
    pinkPlayer.bounceOff(wall23)

}