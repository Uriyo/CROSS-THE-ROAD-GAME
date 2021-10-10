var arena = document.querySelector("#Arena");
// var canvas = arena.getContext("2d");
var img = document.querySelector(".character");

var easy=document.querySelector(".easy");
var medium=document.querySelector(".medium");
var hard=document.querySelector(".hard");



var characterPositionup =530;//for up and down
const charspeed=5;
function moveForward()
{
    if(characterPositionup>charspeed)
    {
    let timerId =setTimeout(function()
    {      
        characterPositionup-=charspeed;
        img.style.top= characterPositionup + "px";
    },charspeed)
    }
}
function moveDown()
{
    
    if(characterPositionup<(arena.offsetHeight-40))
    {
     let timerId=setTimeout(function()
        {
            characterPositionup+=charspeed;
            img.style.top= characterPositionup + "px";
        },charspeed) 
    } 
}

var characterPositionleft = 900; //for left and right

function moveLeft()
{
    
    if(characterPositionleft>charspeed){
    let timerId=setTimeout(function()
        {
            characterPositionleft-=charspeed;
            img.style.left= characterPositionleft + "px";
        },charspeed)
    }    
}

function moveRight()
{
   
    if(characterPositionleft<(arena.offsetWidth-40))//you have added or subtracted 40 everyawhere as your charcter is going out of your box
    {
   
    let timerId=setTimeout(function()
    {
        characterPositionleft+=charspeed;
      img.style.left= characterPositionleft + "px";
    },charspeed)  
    }
}

function easy()
{

}

function medium()
{

}

function hard()
{

}
  //function for keynotes
  function control(e)
  {
    if(e.keyCode==38)//for up arrow
    {
        moveForward();
    }
    else if(e.keyCode==40)//for down arrow
    {
        moveDown();      
    }
    else if(e.keyCode==37)
    {
        moveLeft();
    }
    else if(e.keyCode==39)
    {
        moveRight();
    }
}
document.addEventListener('keydown', control);


// CAR MOTION
var vehicle_size = "60px";
var direction_left = "left";
var direction_right = "right";
var speed = 20;
var level1 = 600;
var level2 = 500;
var level3 = 280;
var level4 = 200;
// var vehicle = "Car";
function car_move(direction,speed,level,vehicle) {
    var car = document.createElement("img");
    // road1 to arena
    var arena = document.querySelector("#Arena");

    
    car.setAttribute("src", "./GameAssets/Car.png");
    car.setAttribute("height", "50x");
    car.setAttribute("id","car_id");
    car.style.position = "relative";

    var uid = Math.random();
    car.setAttribute("src", "GameAssets/"+vehicle+".png");
    car.setAttribute("height", vehicle_size);
    car.setAttribute("id","car_id"+direction+level+uid);
    car.style.position = "absolute";
    // road1 to arena
    arena.appendChild(car);

    var car_obj = document.getElementById("car_id"+direction+level+uid);
    var pos = 0 ;
    // 4 levels
    car_obj.style.top = level+'px';
    // elem.style.transform = "scale(-1,1)";
    var status = setInterval(frame,speed);
    if (direction=="right")
    {
        // to flip the image
        car_obj.style.transform = "scale(-1,1)";
        pos = 1920;
        car_obj.style.left = pos;
    }
    function frame() {
        if (direction=="left")
        {
            if (pos>1920)
            {
                clearInterval(status);
                car_obj.remove();
            }
            else
            {
                pos+=3;
                car_obj.style.left = pos+'px';
            }
        }
        // direction is right
        else {
            if (pos<-100)
            {
                clearInterval(status);
                car_obj.remove();
            }
            else {
                pos-=3;
                car_obj.style.left= pos+'px';
            }
        
        }
        }
    
}
// level 2 and 4 for left
// level 1 and 3 for right 
var delay = 1000;
// 6 vehicles
const vehicle_arr = ["Car","Bus","Truck","Jeep","Ambulance","SUV"];
// 2 direction array
const direction_arr = [direction_left,direction_right];

function random_motion() {
    // level1
    setTimeout( function(){
        // gives values 0 1 2 3 4 5 
        console.log(Math.floor((Math.random()*10)/1.8));
        car_move(direction_right,speed,level1,vehicle_arr[Math.floor((Math.random()*10)/1.8)]);
    }, Math.random()*1000);

    // level4
    setTimeout( function(){
        car_move(direction_left,speed,level4,vehicle_arr[Math.floor((Math.random()*10)/1.8)])
    },Math.random()*1000);
    
    // level3
    setTimeout( function(){
        car_move(direction_right,speed,level3,vehicle_arr[Math.floor((Math.random()*10)/1.8)])
    }, Math.random()*1000);
    
    // level2
    setTimeout(function(){
        car_move(direction_left,speed,level2,vehicle_arr[Math.floor((Math.random()*10)/1.8)])
    }, Math.random()*1000)
}
setInterval(random_motion,1000);