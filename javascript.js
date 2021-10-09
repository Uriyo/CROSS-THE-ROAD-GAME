var arena = document.querySelector("#Arena");
// var canvas = arena.getContext("2d");
var img = document.querySelector(".character");

var characterPositionup =530;//for up and down

function moveForward()
{
    if(characterPositionup>20)
    {
    let timerId =setTimeout(function()
    {      
        characterPositionup-=20;
        img.style.top= characterPositionup + "px";
    },20)
    }
}
function moveDown()
{
    
    if(characterPositionup<(arena.offsetHeight-40))
    {
     let timerId=setTimeout(function()
        {
            characterPositionup+=20;
            img.style.top= characterPositionup + "px";
        },20) 
    } 
}

var characterPositionleft = 900; //for left and right

function moveLeft()
{
    
    if(characterPositionleft>20){
    let timerId=setTimeout(function()
        {
            characterPositionleft-=20;
            img.style.left= characterPositionleft + "px";
        },20)
    }    
}

function moveRight()
{
   
    if(characterPositionleft<(arena.offsetWidth-40))//you have added or subtracted 40 everyawhere as your charcter is going out of your box
    {
   
    let timerId=setTimeout(function()
    {
        characterPositionleft+=20;
      img.style.left= characterPositionleft + "px";
    },20)  
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
document.addEventListener('keyup', control);

