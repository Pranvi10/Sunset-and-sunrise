const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
     if(backgroundImg)
         background(backgroundImg);
     
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
   // backgroundImg.display();

}
    async function getBackgroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);
    
        if(hour<= 8 && hour>=6){
            bg = "sunrise1.png";
        }
        else if(hour <= 10 && hour >= 8){
            bg = "sunrise2.png";
        }
        else if(hour <= 12 && hour >= 10){
            bg = "sunrise4.png";
        }
        else if(hour <=14 && hour>= 12){
            bg = "sunrise5.png";
        }
        else if(hour <= 16 && hour >= 14){
            bg = "sunrise7.png";
        }
        else if(hour <= 18 && hour >= 16){
            bg = "sunset10.png";
        }
        else if(hour <= 20 && hour >= 18){
            bg = "sunset11.png";
        }
        else{
            var bg = "sunset12.png";
        }

        backgroundImg = loadImage(bg);
        console.log(backgroundImg);
    }

