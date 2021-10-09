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

