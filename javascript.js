var arena = document.querySelector("#Arena");
// var canvas = arena.getContext("2d");
var img = document.querySelector(".character");

// var easy=document.querySelector(".easy");
// var medium=document.querySelector(".medium");
// var hard=document.querySelector(".hard");

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
// Added at the end of the file
// function easy()
// {

// }

// function medium()
// {

// }

// function hard()
// {

// }
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
var smooth_frame = 20;
var level1 = 600;
var level2 = 500;
var level3 = 280;
var level4 = 200;
// var vehicle = "Car";
function car_move(direction,smooth_frame,level,vehicle,speed) {
    var car = document.createElement("img");
    var road1 = document.querySelector("#road1");
    var uid = Math.random();
    car.setAttribute("src", "GameAssets/"+vehicle+".png");
    car.setAttribute("height", vehicle_size);
    car.setAttribute("id","car_id"+direction+level+uid);
    car.style.position = "absolute";
    road1.appendChild(car);

    var car_obj = document.getElementById("car_id"+direction+level+uid);
    var pos = 0 ;
    // 4 levels
    car_obj.style.top = level+'px';
    // elem.style.transform = "scale(-1,1)";
    var status = setInterval(frame,smooth_frame);
    if (direction=="right")
    {
        // to flip the image
        car_obj.style.transform = "scale(-1,1)";
        // pos = 1920;
        pos=1400;
        car_obj.style.left = pos;
    }
    function frame() {
        if((img.style.left==car_obj.style.left) && (characterPositionup==level1 || characterPositionup==level2 || characterPositionup==level3 || characterPositionup ==level4) )
        {
         // console.log(car_obj.style.left);
         // console.log(img.style.left); 
            alert("Game Over");
        }

        if (direction=="left")
        {
            if (pos>1400)
            {
                clearInterval(status);
                car_obj.remove();
            }
    //         else if((img.style.left==car_obj.style.left) && (characterPositionup==level1 || characterPositionup==level2 || characterPositionup==level3 || characterPositionup ==level4) )
    //    {
    //     // console.log(car_obj.style.left);
    //     // console.log(img.style.left); 
    //        alert("Game Over");
    //    }
            else
            {
                pos+=speed;
                car_obj.style.left = pos+'px';
            }
        }
        // direction is right
        else {
            if (pos<0)
            {
                clearInterval(status);
                car_obj.remove();
            }
            else {
                pos-=speed;
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
        car_move(direction_right,smooth_frame,level1,vehicle_arr[Math.floor((Math.random()*10)/1.8)],3);
    }, Math.random()*1000);

    // level4
    setTimeout( function(){
        car_move(direction_left,smooth_frame,level4,vehicle_arr[Math.floor((Math.random()*10)/1.8)],3)
    },Math.random()*1000);
    
    // level3
    setTimeout( function(){
        car_move(direction_right,smooth_frame,level3,vehicle_arr[Math.floor((Math.random()*10)/1.8)],3)
    }, Math.random()*1000);
    
    // level2
    setTimeout(function(){
        car_move(direction_left,smooth_frame,level2,vehicle_arr[Math.floor((Math.random()*10)/1.8)],3)
    }, Math.random()*1000)
}


// Default is easy onload
var ongoing = setInterval(random_motion,2800);
function Easy() {
    clearInterval(ongoing);
    var ongoing = setInterval(random_motion,2800);
}
function Medium() {
    clearInterval(ongoing);
    setInterval(random_motion,2600);
}
function Hard() {
    clearInterval(ongoing);
    setInterval(random_motion,2400);
}
