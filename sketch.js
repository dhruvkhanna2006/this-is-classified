
var bg,character,mummy,monster,Vampire;
var bgimg,characterimg,mummyimg,monsterimg,Vampireimg;


function preload(){
bgimg=loadImage("images/bg.jpg");
characterimg=loadImage("images/character.png");
monsterimg=loadImage("images/monster.png");
mummyimg=loadImage("images/mummy.png");
Vampireimg=loadImage("images/Vampire.png");
}

function setup(){
createCanvas(750,1000);

bg=createSprite(750,100,10,60);
bg.addImage(bgimg);
bg.scale=1;

monster=createSprite(650,350,10,10);
monster.addImage(monsterimg);
monster.scale=0.5;

mummy=createSprite(300,20,10,10);
mummy.addImage(mummyimg)
mummy.scale=1;

Vampire=createSprite(290,80,10,10);
Vampire.addImage(Vampireimg);
Vampire.scale=1;

character=createSprite(469,30,19,19);
character.addImage(characterimg);
character.scale=1;
}
function draw(){
    drawSprites()
}