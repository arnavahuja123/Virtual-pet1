//Create variables here
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var happyDog,Dog;
var database;
var foodS,foodStock;
function preload()
{
  happyDog.loadImage("images/dogImg.png");
  Dog.loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
database= firebase.database();
foodStock = database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87)
image(dog,200,200,50,50);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
 drawSprites();
 text("Note Press Up Arrow key to feed Drago Milk");
 size(12);
 fill("red");
 stroke("blue");
  //add styles here
function readStock(data){
  foodS=data.val();
}


function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
}



