var arena = document.querySelector("#Arena");
var border = 0;

// var canvas = arena.getContext("2d");
var img = document.querySelector(".character");
var life=document.querySelector(".Lifes");
// var easy=document.querySelector(".easy");
// var medium=document.querySelector(".medium");
// var hard=document.querySelector(".hard");

// Sound effects
var sound_collision = new Audio("GameAssets/Collision.mp3");
var sound_char = new Audio("GameAssets/char_move.mp3");

var characterPositionup =700;//setted randomly
const charspeed=5;
var count =0;

function moveForward()
{
    if(characterPositionup>5)
    {
          
        characterPositionup-=charspeed;
        img.style.top= characterPositionup + "px";
        sound_char.play();
    }
    else if(characterPositionup==5)
    {
        alert ("CONGRATULATIONS ! YOU MADE IT ...");
        location.reload();
    }
}
function moveDown()
{
    
    if(characterPositionup<(arena.offsetHeight-40))
    {

            characterPositionup+=charspeed;
            img.style.top= characterPositionup + "px";
            sound_char.play();

    } 
}

var characterPositionleft = 600; //for left and right

function moveLeft()
{
    
    if(characterPositionleft>charspeed){
            characterPositionleft-=charspeed;
            img.style.left= characterPositionleft + "px";
            sound_char.play();

    }    
}

function moveRight()
{
   
    if(characterPositionleft<(arena.offsetWidth-40))//you have added or subtracted 40 everyawhere as your charcter is going out of your box
    {
   
        characterPositionleft+=charspeed;
      img.style.left= characterPositionleft + "px";  
      sound_char.play();

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
  function ChangeBorder()
{
    
    if (border==1)
    {
        border =0;
    }
    else
    {
        border =1;
    }
}
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
// shifted in initial timer for freezing keydown control while game is starting
// document.addEventListener('keydown', control);
// function gameOver(){

// CAR MOTION
var vehicle_size = "60px";
var vehicle_width = "90px";
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
   
   if (border == 1)
   {
    car.setAttribute("border","2px solid black");
    img.style.border = "2px solid red";
}
if(border ==0)
{
    car.setAttribute("border","0px solid black");
    img.style.border = "0px solid red";
}
    car.setAttribute("width",vehicle_width);
    car.style.position = "absolute";
    arena.appendChild(car);

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
        pos=arena.offsetWidth;
        car_obj.style.left = pos;
    }
    function gameOver(){
        // if((img.style.left==car_obj.style.left) && 
        // (characterPositionup==(level1)  || characterPositionup==level2 || characterPositionup==level3 || characterPositionup ==level4) )
        // { 
        var img_left= parseInt(img.style.left);
        var car_left=parseInt(car_obj.style.left);
        var img_top=800 - parseInt(img.style.top);
        var car_top=800 - parseInt(car_obj.style.top);
        // if((img_left>=car_left && img_left<(car_left+60)) && 
        // (
        // (characterPositionup>=(level1)&& characterPositionup<(level1+60))||
        // (characterPositionup>=(level2)&& characterPositionup<(level2+60))||
        //  (characterPositionup>=(level3)&& characterPositionup<(level3+60))|| 
        //  (characterPositionup>=(level4)&& characterPositionup<(level4+60)) )
        // )
        // {
            if(
                img_left < car_left + 90 &&  //90 == carwidth
                img_left + 50 > car_left &&   // 50 == imgwidth
                 img_top <car_top + 60 &&  //60==carheight
                50 + img_top > car_top 
            )
            {
                console.log(img_left);
                console.log(car_left);
                sound_collision.play();
        // console.log(car_obj.style.left);
        // console.log(img.style.left); 
        count= count +1;
            if(count == 3)
            {
                alert("BETTER LUCK NEXT TIME !");
                location.reload();
            }
            else
            {
                life.innerHTML=`LIFES : ${3-count}`;
                alert(`${count} life lost`);
                img.style.top="700px";
            img.style.left = "600px";
            characterPositionup =700;
            characterPositionleft = 600;
            }
        }
    }
    
    function frame() {
       
       
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
                gameOver();
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
                gameOver();
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
    }, ((Math.random()*1000)+500));

    // level4
    setTimeout( function(){
        car_move(direction_left,smooth_frame,level4,vehicle_arr[Math.floor((Math.random()*10)/1.8)],3)
    },((Math.random()*1000)+500));
    setTimeout( function(){
        car_move(direction_right,smooth_frame,level3,vehicle_arr[Math.floor((Math.random()*10)/1.8)],3)
    }, ((Math.random()*1000)+500));
    
    // level2
    setTimeout(function(){
        car_move(direction_left,smooth_frame,level2,vehicle_arr[Math.floor((Math.random()*10)/1.8)],3)
    }, ((Math.random()*1000)+500))
}

// for the vehicles to be generated initially
function initial_timer(difficulty) {
    console.log("hi");
    // timer div created
    var timer_div = document.createElement("div");
    timer_div.setAttribute("id","timer_div");
    document.body.appendChild(timer_div);

    var timer_msg = document.createElement("h1");
    timer_msg.setAttribute("id","timer_msg");
    timer_div.appendChild(timer_msg);
    // document.getElementById("timer_msg").innerHTML = "Starting Game";
    switch (difficulty)
    {
        case "default":
        document.getElementById("timer_msg").innerHTML = "Starting Game";
        break;
        case "easy":
        document.getElementById("timer_msg").innerHTML = "Easy";
        break;
        case "medium":
        document.getElementById("timer_msg").innerHTML = "Medium";
        break;
        case "hard":
        document.getElementById("timer_msg").innerHTML = "Hard";
        break;

    }
    setTimeout(function(){timer_div.remove();},6000);
}
initial_timer("default");
// Default is easy onload
var ongoing = setInterval(random_motion,3200);
// To freeze keydown for 5 sec during loading
setTimeout(function() {
    document.addEventListener('keydown', control);
},6000);

// to allow keys to be pressed only once
var easy_counter=0;
var medium_counter=0;
var hard_counter=0;

function Easy() {
    if (easy_counter==0)
    {
        clearInterval(ongoing);
        initial_timer("easy");
        document.removeEventListener('keydown',control);
        setTimeout(function() {
            document.addEventListener('keydown', control);
        },6000);
        var ongoing = setInterval(random_motion,3200);
        easy_counter+=1
    }
    
}
function Medium() {
    if (medium_counter==0)
    {
        clearInterval(ongoing);
        initial_timer("medium");
        document.removeEventListener('keydown',control);
        setTimeout(function() {
            document.addEventListener('keydown', control);
        },6000);
        setInterval(random_motion,2800);
        medium_counter+=1;
    }
}
function Hard() {
    if (hard_counter==0)
    {
        clearInterval(ongoing);
        initial_timer("hard");
        document.removeEventListener('keydown',control);
        setTimeout(function() {
            document.addEventListener('keydown', control);
        },6000);
        setInterval(random_motion,2000);
        hard_counter+=1;
    }
}

// Game themes
var count_bg = 1;
function ChangeBg() {
    var currentBg = document.getElementById("Arena");
    if (count_bg%2!=0)
    {
        currentBg.style.backgroundImage = "url(GameAssets/Road_bg_desert.png)";
        count_bg+=1;
    }
    else 
    {
        currentBg.style.backgroundImage = "url(GameAssets/Road_bg.png)";
        count_bg+=1;
    }
}
var count_char=1;
function ChangeChar() {
    var currentBg = document.querySelector(".character");
    if (count_char%2!=0&&count_char%3!=0)
    {
        currentBg.style.backgroundImage = "url(GameAssets/character3.png)";
        count_char+=1;
    }
    else if (count_char%2==0)
    {
        currentBg.style.backgroundImage = "url(GameAssets/character.png)";
        count_char+=1;
    }
    else
    {
        currentBg.style.backgroundImage = "url(GameAssets/character2.png)";
        count_char+=1;
    }
}
function ChangeBorder()
{
    
    if (border==0)
    {
        border =1;
    }
    else if(border==1)
    {
        border =0;
    }
}