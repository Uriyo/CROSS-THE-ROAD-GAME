var arena = document.querySelector("#Arena");
// var canvas = arena.getContext("2d");
var img = document.querySelector(".character");

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
function car_move() {
    var car = document.createElement("img");
    var road1 = document.querySelector("#road1");
    
    car.setAttribute("src", "GameAssets/Car.png");
    car.setAttribute("height", "50x");
    car.setAttribute("id","car_id");
    car.style.position = "relative";

    road1.appendChild(car);

    var car_obj = document.getElementById("car_id");
    var pos = 0 ;
    // elem.style.transform = "scale(-1,1)";
    var status = setInterval(frame,2);
    function frame() {
        if (pos>1920)
        {
            clearInterval(status);
        }
        else {
            pos++;
            car_obj.style.left = pos+'px';
        }
        }
    
}
car_move();